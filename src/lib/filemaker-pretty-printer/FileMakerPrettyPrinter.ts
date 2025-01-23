import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import {
  CalculationContext,
  ExpressionContext,
  FunctionCallContext,
  FieldReferenceContext,
  ArgumentListContext,
  LiteralExprContext,
  FieldExprContext,
  FunctionExprContext,
  ParenExprContext,
  LiteralContext,
  LetExprContext,
  LetFunctionContext,
  VariableDeclarationContext,
  VariableExprContext,
} from '../../generated/FileMakerCalcParser';
import { FileMakerCalcVisitor } from '../../generated/FileMakerCalcVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { BuiltInFunctions } from '../../functions/BuiltInFunctions';

export interface PrettyPrinterOptions {
  newLineThreshold?: number; // Number of arguments after which to put function on new lines
  indentChar?: string; // Character to use for indentation (default: '\t')
}

class FileMakerPrettyPrinter
  extends AbstractParseTreeVisitor<string>
  implements FileMakerCalcVisitor<string>
{
  private indentLevel = 0;
  private options: PrettyPrinterOptions;
  private hasInvalidFunction = false;
  private validationError: string | null = null;

  constructor(options: PrettyPrinterOptions = {}) {
    super();
    this.options = {
      indentChar: '  ', // Use 2 spaces for indentation
      ...options,
    };
  }

  private indent(): void {
    this.indentLevel++;
  }

  private unindent(): void {
    this.indentLevel--;
  }

  private getIndentation(): string {
    return this.options.indentChar!.repeat(this.indentLevel);
  }

  visitCalculation = (ctx: CalculationContext): string => {
    this.hasInvalidFunction = false;
    this.validationError = null;
    const result = this.visit(ctx.expression());
    return this.hasInvalidFunction ? `/*\n${result}\n*/\n/* ${this.validationError} */` : result;
  };

  visitExpression = (ctx: ExpressionContext): string => {
    let output = '';
    for (let i = 0; i < ctx.childCount; i++) {
      output += this.visit(ctx.getChild(i));
      if (i < ctx.childCount - 1) {
        output += ' ';
      }
    }
    return output;
  };

  visitLiteralExpr = (ctx: LiteralExprContext): string => {
    return this.visit(ctx.literal());
  };

  visitFieldExpr = (ctx: FieldExprContext): string => {
    return this.visit(ctx.fieldReference());
  };

  visitFunctionExpr = (ctx: FunctionExprContext): string => {
    return this.visit(ctx.functionCall());
  };

  visitParenExpr = (ctx: ParenExprContext): string => {
    return `( ${this.visit(ctx.expression())} )`;
  };

  visitFunctionCall = (ctx: FunctionCallContext): string => {
    const functionName = ctx.IDENTIFIER().text;
    const argList = ctx.argumentList();
    const argCount = argList ? argList.expression().length : 0;

    // Check if function is valid with correct number of arguments
    const validationError = BuiltInFunctions.validateFunction(functionName, argCount);
    if (validationError) {
      this.hasInvalidFunction = true;
      this.validationError = validationError;
    }

    if (!argList || argCount === 0) {
      return `${functionName}()`;
    }

    this.indent();
    const expressions = argList.expression();
    const argStrings = expressions.map((arg: ExpressionContext) => this.visit(arg));
    const indentation = this.getIndentation();
    this.unindent();

    // Format arguments with proper indentation and semicolons
    const formattedArgs = argStrings
      .map((arg, index) => {
        // Add semicolon for all but the last argument
        const separator = index < argStrings.length - 1 ? ' ;' : '';
        return `${indentation}${arg}${separator}`;
      })
      .join('\n');

    return `${functionName}(\n${formattedArgs}\n${this.getIndentation()})`;
  };

  visitFieldReference = (ctx: FieldReferenceContext): string => {
    return ctx.text;
  };

  visitLiteral = (ctx: LiteralContext): string => {
    return ctx.text;
  };

  visitLetExpr = (ctx: LetExprContext): string => {
    return this.visit(ctx.letFunction());
  };

  visitLetFunction = (ctx: LetFunctionContext): string => {
    this.indent();
    const indentation = this.getIndentation();

    // Format variable declarations
    const declarations = ctx.variableDeclaration();
    const varDeclarations = declarations
      .map((decl: VariableDeclarationContext, index: number) => {
        const isLast = index === declarations.length - 1;
        return `${indentation}${this.visit(decl)}${isLast ? '' : ';'}`;
      })
      .join('\n');

    // Format result expression
    const resultExpr = this.visit(ctx.expression());

    this.unindent();

    return `Let([\n${varDeclarations}\n${this.getIndentation()}];\n${indentation}${resultExpr}\n${this.getIndentation()})`;
  };

  visitVariableDeclaration = (ctx: VariableDeclarationContext): string => {
    const varName = ctx.IDENTIFIER().text;
    const expr = ctx.expression();
    const expression = this.visit(expr);
    return `${varName} = ${expression}`;
  };

  visitVariableExpr = (ctx: VariableExprContext): string => {
    return ctx.IDENTIFIER().text;
  };

  protected defaultResult(): string {
    return '';
  }

  visitTerminal = (node: TerminalNode): string => {
    return node.text;
  };

  visit(tree: any): string {
    return tree.accept(this);
  }
}

export default FileMakerPrettyPrinter;
