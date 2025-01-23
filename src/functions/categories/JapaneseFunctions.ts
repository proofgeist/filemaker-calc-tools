import { FunctionDefinition } from '../types';

export const JapaneseFunctions: FunctionDefinition[] = [
  {
    name: 'KanaHankaku',
    minArgs: 1,
    maxArgs: 1,
    description: 'Converts kana to half-width characters',
  },
  {
    name: 'KanaZenkaku',
    minArgs: 1,
    maxArgs: 1,
    description: 'Converts kana to full-width characters',
  },
  {
    name: 'KanjiNumeral',
    minArgs: 1,
    maxArgs: 1,
    description: 'Converts numbers to kanji numerals',
  },
  {
    name: 'RomanHankaku',
    minArgs: 1,
    maxArgs: 1,
    description: 'Converts roman characters to half-width',
  },
  {
    name: 'RomanZenkaku',
    minArgs: 1,
    maxArgs: 1,
    description: 'Converts roman characters to full-width',
  },
];
