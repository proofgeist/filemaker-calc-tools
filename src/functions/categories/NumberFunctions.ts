import { FunctionDefinition } from '../types';

export const NumberFunctions: FunctionDefinition[] = [
  {
    name: 'Abs',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the absolute (positive) value of a number',
  },
  {
    name: 'Ceiling',
    minArgs: 1,
    maxArgs: 1,
    description: 'Rounds a number up to the next integer',
  },
  {
    name: 'Floor',
    minArgs: 1,
    maxArgs: 1,
    description: 'Rounds a number down to the next integer',
  },
  {
    name: 'Int',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the integer portion of a number',
  },
  {
    name: 'Mod',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the remainder after dividing two numbers',
  },
  {
    name: 'Random',
    minArgs: 0,
    maxArgs: 0,
    description: 'Returns a random number between 0 and 1',
  },
  {
    name: 'Round',
    minArgs: 2,
    maxArgs: 2,
    description: 'Rounds a number to specified number of decimal places',
  },
  {
    name: 'Truncate',
    minArgs: 2,
    maxArgs: 2,
    description: 'Truncates a number to specified number of decimal places',
  },
];
