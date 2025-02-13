import { FunctionDefinition } from '../types';

export const JSON_CONSTANTS = {
  JSONString: 1,
  JSONNumber: 2,
  JSONObject: 3,
  JSONArray: 4,
  JSONBoolean: 5,
  JSONNull: 6,
  JSONRaw: 0,
} as const;

export type JsonConstant = keyof typeof JSON_CONSTANTS;

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
    minArgs: 2,
    maxArgs: Infinity,
    description:
      'Sets a value in a JSON object or array. Can be called with either:\n1. Four arguments: (json, key, value, type)\n2. Initial JSON string followed by arrays: (json, [key, value, type], ...)',
    validateArgs: (args: string[]): string | null => {
      if (args.length < 2) {
        return 'JSONSetElement requires at least a JSON string and one key/value/type set';
      }

      // If using the 4-argument format
      if (args.length === 4) {
        return null;
      }

      // If using array format, each argument after the first should be an array with exactly 3 elements
      for (let i = 1; i < args.length; i++) {
        const arg = args[i];
        if (!arg.startsWith('[') || !arg.endsWith(']')) {
          return 'When using array format, each argument after the JSON string must be an array [key, value, type]';
        }

        // Count semicolons to check for 3 elements
        const semicolons = arg.split(';').length - 1;
        if (semicolons !== 2) {
          return 'Each array argument must contain exactly 3 elements [key, value, type]';
        }
      }

      return null;
    },
  },
];
