import { FunctionDefinition } from './types';
import {
  TextFunctions,
  NumberFunctions,
  DateFunctions,
  TimeFunctions,
  TimestampFunctions,
  ContainerFunctions,
  JapaneseFunctions,
  JsonFunctions,
  AggregateFunctions,
  RepeatingFunctions,
  FinancialFunctions,
  TrigonometricFunctions,
  LogicalFunctions,
  AiFunctions,
  GetFunctions,
  DesignFunctions,
  MiscellaneousFunctions,
  MobileFunctions,
} from './categories';

/**
 * Contains all built-in FileMaker functions
 */
export class BuiltInFunctions {
  private static readonly functions: FunctionDefinition[] = [
    ...TextFunctions,
    ...NumberFunctions,
    ...DateFunctions,
    ...TimeFunctions,
    ...TimestampFunctions,
    ...ContainerFunctions,
    ...JapaneseFunctions,
    ...JsonFunctions,
    ...AggregateFunctions,
    ...RepeatingFunctions,
    ...FinancialFunctions,
    ...TrigonometricFunctions,
    ...LogicalFunctions,
    ...AiFunctions,
    ...GetFunctions,
    ...DesignFunctions,
    ...MiscellaneousFunctions,
    ...MobileFunctions,
  ];

  /**
   * Checks if a function exists and has the correct number of arguments
   */
  public static validateFunction(name: string, argCount: number): string | null {
    const func = this.functions.find((f) => f.name.toLowerCase() === name.toLowerCase());

    if (!func) {
      return `Unknown function: ${name}`;
    }

    if (argCount < func.minArgs) {
      return `Too few arguments for ${name}. Expected at least ${func.minArgs}, got ${argCount}`;
    }

    if (func.maxArgs !== Infinity && argCount > func.maxArgs) {
      return `Too many arguments for ${name}. Expected at most ${func.maxArgs}, got ${argCount}`;
    }

    return null;
  }

  /**
   * Returns all built-in function names
   */
  public static getFunctionNames(): string[] {
    return this.functions.map((f) => f.name);
  }
}
