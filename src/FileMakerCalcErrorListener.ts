// @ts-ignore
import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts';
import { ValidationError } from './errors/ValidationError';

export class FileMakerCalcErrorListener implements ANTLRErrorListener<any> {
  private errors: ValidationError[] = [];

  syntaxError<T>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T | undefined,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    this.errors.push(
      new ValidationError(msg, {
        line,
        column: charPositionInLine,
      })
    );
  }

  getErrors(): ValidationError[] {
    return this.errors;
  }
}
