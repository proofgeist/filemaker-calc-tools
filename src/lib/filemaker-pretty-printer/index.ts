import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { FileMakerCalcLexer } from '../../generated/FileMakerCalcLexer';
import { FileMakerCalcParser } from '../../generated/FileMakerCalcParser';
import FileMakerPrettyPrinter, { PrettyPrinterOptions } from './FileMakerPrettyPrinter';

export function prettyPrintFileMakerCalculation(
  calculation: string,
  options?: PrettyPrinterOptions
): string {
  const input = CharStreams.fromString(calculation);
  const lexer = new FileMakerCalcLexer(input);
  const tokens = new CommonTokenStream(lexer);
  const parser = new FileMakerCalcParser(tokens);
  const tree = parser.calculation();

  const printer = new FileMakerPrettyPrinter(options);
  return printer.visit(tree);
}
