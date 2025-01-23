import { FunctionDefinition } from '../types';

export const MobileFunctions: FunctionDefinition[] = [
  {
    name: 'LocationValues',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns location information from a device',
  },
  {
    name: 'GetSensor',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns sensor data from a mobile device',
  },
  {
    name: 'GetVoiceInput',
    minArgs: 2,
    maxArgs: 2,
    description: 'Captures voice input with specified language',
  },
  {
    name: 'DeviceValues',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns device-specific information',
  },
];
