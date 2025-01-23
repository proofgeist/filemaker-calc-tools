import { FunctionDefinition } from '../types';

export const RepeatingFunctions: FunctionDefinition[] = [
  {
    name: 'Extend',
    minArgs: 2,
    maxArgs: 2,
    description: 'Extends a repetition with a value',
  },
  {
    name: 'GetRepetition',
    minArgs: 2,
    maxArgs: 2,
    description: 'Gets the value of a specific repetition',
  },
  {
    name: 'Last',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the last used repetition number',
  },
  {
    name: 'GetNthRecord',
    minArgs: 2,
    maxArgs: 2,
    description: 'Gets a value from a specific record number',
  },
];
