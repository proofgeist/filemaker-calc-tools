// FileMaker Calculation Formatter in TypeScript

import { FileMakerCalcValidator } from '../FileMakerCalcValidator';
import { ValidationError } from '../errors/ValidationError';

export class FileMakerCalcFormatter {
  private calc: string = '';
  private stringStack: { content: string; placeholder: string }[] = [];
  private placeholderCounter: number = 0;
  private indentChar: string = '\t';
  private maxIndentWidth: number = 40;

  constructor(calc: string) {
    this.calc = calc;
  }

  // Remove strings and comments
  private removeStrings(): boolean {
    let calc2 = this.calc;
    let leftPos = -1;

    while (
      (leftPos = this.minButNotBlank(
        this.minButNotBlank(calc2.indexOf('"'), calc2.indexOf('//')),
        calc2.indexOf('/*')
      )) >= 0
    ) {
      let rightPos = -1;
      if (calc2.charAt(leftPos) === '"') {
        rightPos = calc2.indexOf('"', leftPos + 1);
        if (rightPos < 0) return false;
        const stringContent = calc2.substring(leftPos, rightPos + 1);
        const placeholder = `__STR${this.placeholderCounter++}__`;
        this.stringStack.push({ content: stringContent, placeholder });
        calc2 = calc2.substring(0, leftPos) + placeholder + calc2.substring(rightPos + 1);
      } else if (calc2.charAt(leftPos + 1) === '/') {
        rightPos = calc2.indexOf('\n', leftPos);
        if (rightPos < 0) rightPos = calc2.length;
        const comment = calc2.substring(leftPos, rightPos);
        const placeholder = `__CMT${this.placeholderCounter++}__`;
        this.stringStack.push({ content: comment, placeholder });
        calc2 = calc2.substring(0, leftPos) + placeholder + calc2.substring(rightPos);
      } else {
        rightPos = calc2.indexOf('*/', leftPos);
        if (rightPos < 0) return false;
        const comment = calc2.substring(leftPos, rightPos + 2);
        const placeholder = `__CMT${this.placeholderCounter++}__`;
        this.stringStack.push({ content: comment, placeholder });
        calc2 = calc2.substring(0, leftPos) + placeholder + calc2.substring(rightPos + 2);
      }
    }
    this.calc = calc2;
    return true;
  }

  private parseCalc(): void {
    // Add spaces around operators
    this.calc = this.calc
      .replace(/([=<>!]=|[=<>+\-*\/&|])/g, ' $1 ')
      // Add line breaks after semicolons and closing brackets followed by semicolons
      .replace(/;/g, ';\n')
      .replace(/\];/g, '];\n')
      // Add line breaks after opening brackets
      .replace(/\(/g, '(\n')
      .replace(/\[/g, '[\n')
      // Add line breaks before closing brackets
      .replace(/\)/g, '\n)')
      .replace(/\]/g, '\n]')
      // Clean up extra whitespace
      .replace(/\s+/g, ' ')
      .trim();
  }

  private indent(): void {
    let indentLevel = 0;
    let lines = this.calc.split('\n');
    let result = '';

    for (let line of lines) {
      let trimmedLine = line.trim();
      if (trimmedLine.length === 0) continue;

      // Decrease indent for lines that start with closing brackets
      if (trimmedLine.match(/^[\)\]]/) || trimmedLine.match(/^[\)\]];/)) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      // Add the line with proper indentation
      let indent = this.indentChar.repeat(indentLevel);
      result += indent + trimmedLine + '\n';

      // Increase indent for lines that end with opening brackets
      if (trimmedLine.match(/[\(\[]$/)) {
        indentLevel++;
      }
    }

    this.calc = result.trim();
  }

  private minButNotBlank(a: number, b: number): number {
    if (a < 0) {
      return b;
    }
    if (b < 0) {
      return a;
    }
    return Math.min(a, b);
  }

  public format(): string {
    if (!this.removeStrings()) {
      return 'Error: Unmatched string or comment delimiter';
    }

    this.parseCalc();
    this.indent();

    // Restore strings and comments in reverse order
    for (const item of this.stringStack.reverse()) {
      this.calc = this.calc.replace(item.placeholder, item.content);
    }

    return this.calc;
  }
}

export function formatFmCalc(calc: string): string {
  const formatter = new FileMakerCalcFormatter(calc);
  return formatter.format();
}

export function formatWithValidation(calc: string, validator: FileMakerCalcValidator): string {
  const formatted = formatFmCalc(calc);

  try {
    validator.validate(calc);
    return formatted;
  } catch (error) {
    if (error instanceof ValidationError) {
      return [
        '/**',
        formatted,
        '*/',
        '',
        '// Validation Error:',
        `// ${error.message}`,
        error.location ? `// At line ${error.location.line}, column ${error.location.column}` : '',
      ].join('\n');
    }
    throw error;
  }
}
