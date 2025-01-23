import { FunctionDefinition } from '../types';

export const TimestampFunctions: FunctionDefinition[] = [
  {
    name: 'Timestamp',
    minArgs: 6,
    maxArgs: 6,
    description: 'Returns a timestamp from date and time components',
  },
  {
    name: 'GetAsTimestamp',
    minArgs: 1,
    maxArgs: 1,
    description: 'Converts text to a timestamp',
  },
];
