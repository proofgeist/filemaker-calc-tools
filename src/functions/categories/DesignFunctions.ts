import { FunctionDefinition } from '../types';

export const DesignFunctions: FunctionDefinition[] = [
  {
    name: 'Evaluate',
    minArgs: 1,
    maxArgs: 1,
    description: 'Evaluates a calculation expression',
  },
  {
    name: 'ExecuteSQL',
    minArgs: 3,
    maxArgs: 4,
    description: 'Executes a SQL query',
  },
  {
    name: 'GetLayoutName',
    minArgs: 0,
    maxArgs: 1,
    description: 'Returns the name of the current or specified layout',
  },
  {
    name: 'GetTableName',
    minArgs: 0,
    maxArgs: 1,
    description: 'Returns the name of the current or specified table',
  },
  {
    name: 'GetWindowName',
    minArgs: 0,
    maxArgs: 0,
    description: 'Returns the name of the current window',
  },
];
