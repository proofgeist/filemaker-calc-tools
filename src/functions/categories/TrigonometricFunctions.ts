import { FunctionDefinition } from '../types';

export const TrigonometricFunctions: FunctionDefinition[] = [
  {
    name: 'Acos',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the arc cosine of a number',
  },
  {
    name: 'Asin',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the arc sine of a number',
  },
  {
    name: 'Atan',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the arc tangent of a number',
  },
  {
    name: 'Cos',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the cosine of an angle',
  },
  {
    name: 'Degrees',
    minArgs: 1,
    maxArgs: 1,
    description: 'Converts radians to degrees',
  },
  {
    name: 'Exp',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns e raised to a power',
  },
  {
    name: 'Ln',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the natural logarithm of a number',
  },
  {
    name: 'Log',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the base-10 logarithm of a number',
  },
  {
    name: 'Pi',
    minArgs: 0,
    maxArgs: 0,
    description: 'Returns the mathematical constant π',
  },
  {
    name: 'Radians',
    minArgs: 1,
    maxArgs: 1,
    description: 'Converts degrees to radians',
  },
  {
    name: 'Sin',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the sine of an angle',
  },
  {
    name: 'Tan',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the tangent of an angle',
  },
];
