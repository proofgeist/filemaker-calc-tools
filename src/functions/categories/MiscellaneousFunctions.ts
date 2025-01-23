import { FunctionDefinition } from '../types';

export const MiscellaneousFunctions: FunctionDefinition[] = [
  {
    name: 'GetLastError',
    minArgs: 0,
    maxArgs: 0,
    description: 'Returns the last error message',
  },
  {
    name: 'IsValid',
    minArgs: 1,
    maxArgs: 1,
    description: 'Validates if an expression is valid',
  },
  {
    name: 'IsValidExpression',
    minArgs: 1,
    maxArgs: 1,
    description: 'Validates if a calculation expression is valid',
  },
  {
    name: 'Let',
    minArgs: 2,
    maxArgs: 2,
    description: 'Assigns values to variables',
  },
  {
    name: 'RGB',
    minArgs: 3,
    maxArgs: 3,
    description: 'Returns a color from RGB values',
  },
  {
    name: 'Self',
    minArgs: 0,
    maxArgs: 0,
    description: 'Returns the value of the current field',
  },
  {
    name: 'Extend',
    minArgs: 2,
    maxArgs: 2,
    description: 'Extends a script with a calculation',
  },
];
