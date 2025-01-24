// @ts-ignore
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { FileMakerCalcLexer } from './generated/FileMakerCalcLexer';
import { FileMakerCalcParser } from './generated/FileMakerCalcParser';
import { ValidationError } from './errors/ValidationError';
import { BuiltInFunctions } from './functions/BuiltInFunctions';
import { FileMakerCalcErrorListener } from './FileMakerCalcErrorListener';
import { FileMakerCalcVisitor } from './generated/FileMakerCalcVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {
  FunctionCallContext,
  VariableExprContext,
  LetFunctionContext,
  VariableDeclarationContext,
} from './generated/FileMakerCalcParser';

class ScopeValidator extends AbstractParseTreeVisitor<void> implements FileMakerCalcVisitor<void> {
  private currentLetScope: Set<string> = new Set();
  private insideLetFunction: boolean = false;

  constructor(private errors: ValidationError[]) {
    super();
  }

  visitLetFunction(ctx: LetFunctionContext): void {
    // Create new scope for Let function
    this.currentLetScope = new Set();
    this.insideLetFunction = true;

    // Add declared variables to scope
    ctx.variableDeclaration().forEach((decl) => {
      this.currentLetScope.add(decl.IDENTIFIER().text);
    });

    // Visit the Let function body
    this.visit(ctx.expression());

    // Clear scope after Let function
    this.currentLetScope.clear();
    this.insideLetFunction = false;
  }

  visitVariableExpr(ctx: VariableExprContext): void {
    const varName = ctx.IDENTIFIER().text;

    // Skip validation if we're inside a function call (it's the function name)
    if (ctx.parent instanceof FunctionCallContext) {
      return;
    }

    // Skip validation if we're in a field reference
    if (ctx.parent?.text.includes('::')) {
      return;
    }

    // If not in Let scope and not a $/$$ variable, it's an error
    if (!this.currentLetScope.has(varName) && !varName.startsWith('$')) {
      const message = this.insideLetFunction
        ? `Undeclared variable: "${varName}". Variables in Let functions must be declared in the Let block.`
        : 'Text must be quoted or be a valid field reference, function call, or variable. In short, text must be a valid FileMaker expression.';

      this.errors.push(
        new ValidationError(message, {
          line: ctx.start.line,
          column: ctx.start.charPositionInLine,
        })
      );
    }
  }

  protected defaultResult(): void {}
}

class FunctionValidator
  extends AbstractParseTreeVisitor<void>
  implements FileMakerCalcVisitor<void>
{
  constructor(private validator: FileMakerCalcValidator, private errors: ValidationError[]) {
    super();
  }

  visitFunctionCall(ctx: FunctionCallContext): void {
    const functionName = ctx.IDENTIFIER().text;

    // Special case for Let function - it's handled by letFunction rule
    if (functionName.toLowerCase() === 'let') {
      return;
    }

    const argCount = ctx.argumentList()?.expression()?.length || 0;

    const error = this.validator.isValidFunction(functionName, argCount);
    if (error) {
      this.errors.push(
        new ValidationError(error, {
          line: ctx.start.line,
          column: ctx.start.charPositionInLine,
        })
      );
    }
  }

  protected defaultResult(): void {}
}

export class FileMakerCalcValidator {
  private customFunctions: Set<string> = new Set();

  /**
   * Adds custom functions to the validator
   */
  public addCustomFunctions(functionNames: string[]): void {
    functionNames.forEach((name) => this.customFunctions.add(name.toLowerCase()));
  }

  /**
   * Validates a FileMaker calculation
   * @returns Array of validation errors, empty if valid
   */
  public validate(calculation: string): ValidationError[] {
    const errors: ValidationError[] = [];

    // Create the lexer and parser
    const inputStream = CharStreams.fromString(calculation);
    const lexer = new FileMakerCalcLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new FileMakerCalcParser(tokenStream);

    // Add custom error listener
    const errorListener = new FileMakerCalcErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    // Parse the calculation
    try {
      const tree = parser.calculation();
      const functionValidator = new FunctionValidator(this, errors);
      const scopeValidator = new ScopeValidator(errors);
      functionValidator.visit(tree);
      scopeValidator.visit(tree);
    } catch (e) {
      // Handle any parsing errors
      console.error('Parsing error:', e);
    }

    // Get syntax errors from the listener
    errors.push(...errorListener.getErrors());

    return errors;
  }

  /**
   * Checks if a function is valid (either built-in or custom)
   */
  public isValidFunction(name: string, argCount: number): string | null {
    // Check built-in functions first
    const builtInError = BuiltInFunctions.validateFunction(name, argCount);
    if (!builtInError) {
      return null;
    }

    // If not built-in, check custom functions
    if (this.customFunctions.has(name.toLowerCase())) {
      return null;
    }

    return builtInError;
  }
}
