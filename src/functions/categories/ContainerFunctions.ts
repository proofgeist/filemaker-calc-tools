import { FunctionDefinition } from '../types';

export const ContainerFunctions: FunctionDefinition[] = [
  {
    name: 'GetContainerAttribute',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns information about a container field',
  },
  {
    name: 'GetHeight',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the height of an image in a container field',
  },
  {
    name: 'GetThumbnail',
    minArgs: 3,
    maxArgs: 3,
    description: 'Returns a thumbnail of an image in a container field',
  },
  {
    name: 'GetWidth',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the width of an image in a container field',
  },
];
