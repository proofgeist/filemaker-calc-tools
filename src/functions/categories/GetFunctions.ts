import { FunctionDefinition } from '../types';

export const GetFunctions: FunctionDefinition[] = [
  {
    name: 'Get',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns system or environmental values',
  },
  {
    name: 'GetField',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the value of a field',
  },
  {
    name: 'GetFieldName',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the name of a field',
  },
  {
    name: 'GetLayoutObjectAttribute',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the attribute of a layout object',
  },
  {
    name: 'GetNthRecord',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the record number in the found set',
  },
  {
    name: 'GetRepetition',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the value of a repetition',
  },
  {
    name: 'GetRequestAttribute',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns web viewer request attributes',
  },
  {
    name: 'GetResultAttribute',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns web viewer result attributes',
  },
];
