import { FunctionDefinition } from '../types';

export const AiFunctions: FunctionDefinition[] = [
  {
    name: 'AIClassify',
    minArgs: 2,
    maxArgs: 2,
    description: 'Classifies text using AI model',
  },
  {
    name: 'AIPredict',
    minArgs: 2,
    maxArgs: 2,
    description: 'Makes predictions using AI model',
  },
  {
    name: 'AIRewrite',
    minArgs: 2,
    maxArgs: 2,
    description: 'Rewrites text using AI model',
  },
  {
    name: 'AITranslate',
    minArgs: 2,
    maxArgs: 2,
    description: 'Translates text using AI model',
  },
];
