// @ts-ignore
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { FileMakerCalcLexer } from './generated/FileMakerCalcLexer';
import { FileMakerCalcParser } from './generated/FileMakerCalcParser';
import { ValidationError } from './errors/ValidationError';
import { BuiltInFunctions } from './functions/BuiltInFunctions';
import { FileMakerCalcErrorListener } from './FileMakerCalcErrorListener';
import { FileMakerCalcVisitor } from './generated/FileMakerCalcVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { FunctionCallContext } from './generated/FileMakerCalcParser';

class FunctionValidator
  extends AbstractParseTreeVisitor<void>
  implements FileMakerCalcVisitor<void>
{
  constructor(private validator: FileMakerCalcValidator, private errors: ValidationError[]) {
    super();
  }

  visitFunctionCall(ctx: FunctionCallContext): void {
    const functionName = ctx.IDENTIFIER().text;
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
      const validator = new FunctionValidator(this, errors);
      validator.visit(tree);
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
