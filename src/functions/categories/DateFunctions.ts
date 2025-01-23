import { FunctionDefinition } from '../types';

export const DateFunctions: FunctionDefinition[] = [
  {
    name: 'Date',
    minArgs: 3,
    maxArgs: 3,
    description: 'Returns a date from month, day, and year values',
  },
  {
    name: 'Day',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the day of the month from a date',
  },
  {
    name: 'DayName',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the name of the day of the week from a date',
  },
  {
    name: 'DayOfWeek',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the day of the week (1-7) from a date',
  },
  {
    name: 'DayOfYear',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the day of the year (1-366) from a date',
  },
  {
    name: 'Month',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the month number from a date',
  },
  {
    name: 'MonthName',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the name of the month from a date',
  },
  {
    name: 'WeekOfYear',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the week number of the year from a date',
  },
  {
    name: 'Year',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the year from a date',
  },
];
