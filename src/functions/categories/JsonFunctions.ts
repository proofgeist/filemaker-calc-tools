import { FunctionDefinition } from '../types';

export const JsonFunctions: FunctionDefinition[] = [
  {
    name: 'JSONDeleteElement',
    minArgs: 2,
    maxArgs: 2,
    description: 'Deletes an element from a JSON array or object',
  },
  {
    name: 'JSONFormatElements',
    minArgs: 1,
    maxArgs: 2,
    description: 'Formats JSON text with line breaks and indentation',
  },
  {
    name: 'JSONGetElement',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns a value from a JSON object or array',
  },
  {
    name: 'JSONListKeys',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns a list of keys from a JSON object',
  },
  {
    name: 'JSONListValues',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns a list of values from a JSON object or array',
  },
  {
    name: 'JSONSetElement',
    minArgs: 4,
    maxArgs: 4,
    description: 'Sets a value in a JSON object or array',
  },
];
