import { FunctionDefinition } from '../types';

export const LogicalFunctions: FunctionDefinition[] = [
  {
    name: 'If',
    minArgs: 2,
    maxArgs: 3,
    description: 'Evaluates a logical test and returns one of two values',
  },
  {
    name: 'Case',
    minArgs: 2,
    maxArgs: Infinity,
    description: 'Evaluates multiple conditions and returns a corresponding result',
  },
  { name: 'IsEmpty', minArgs: 1, maxArgs: 1, description: 'Determines if a field is empty' },
];
