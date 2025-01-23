import { FunctionDefinition } from '../types';

export const FinancialFunctions: FunctionDefinition[] = [
  {
    name: 'FV',
    minArgs: 3,
    maxArgs: 3,
    description: 'Returns the future value of an investment',
  },
  {
    name: 'NPV',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the net present value of an investment',
  },
  {
    name: 'PMT',
    minArgs: 3,
    maxArgs: 3,
    description: 'Returns the payment amount for a loan',
  },
  {
    name: 'PV',
    minArgs: 3,
    maxArgs: 3,
    description: 'Returns the present value of an investment',
  },
];
