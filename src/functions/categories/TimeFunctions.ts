import { FunctionDefinition } from '../types';

export const TimeFunctions: FunctionDefinition[] = [
  {
    name: 'Hour',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the hour (0-23) from a time',
  },
  {
    name: 'Minute',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the minute (0-59) from a time',
  },
  {
    name: 'Seconds',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the seconds (0-59) from a time',
  },
  {
    name: 'Time',
    minArgs: 3,
    maxArgs: 3,
    description: 'Returns a time from hour, minute, and second values',
  },
];
