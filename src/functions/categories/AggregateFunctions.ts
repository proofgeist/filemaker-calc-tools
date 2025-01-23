import { FunctionDefinition } from '../types';

export const AggregateFunctions: FunctionDefinition[] = [
  {
    name: 'Average',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the average of all non-empty values in a field',
  },
  {
    name: 'Count',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the number of records with non-empty values in a field',
  },
  {
    name: 'List',
    minArgs: 1,
    maxArgs: 2,
    description: 'Returns all values of a field as a return-separated list',
  },
  {
    name: 'Max',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the maximum value in a field',
  },
  {
    name: 'Min',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the minimum value in a field',
  },
  {
    name: 'StDev',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the standard deviation of values in a field',
  },
  {
    name: 'StDevP',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the population standard deviation of values in a field',
  },
  {
    name: 'Sum',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the sum of all values in a field',
  },
  {
    name: 'Variance',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the variance of values in a field',
  },
  {
    name: 'VarianceP',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the population variance of values in a field',
  },
];
