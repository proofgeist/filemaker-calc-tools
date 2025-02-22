import { FunctionDefinition } from '../types';

export const TextFunctions: FunctionDefinition[] = [
  {
    name: 'Char',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the characters for the Unicode code points in the number',
  },
  {
    name: 'Code',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the Unicode code points for the characters in the text',
  },
  {
    name: 'Exact',
    minArgs: 2,
    maxArgs: 2,
    description:
      'Returns 1 (true) if the contents of any two fields match; otherwise, returns 0 (false)',
  },
  {
    name: 'Filter',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns from textToFilter only those characters specified in filterText',
  },
  {
    name: 'FilterValues',
    minArgs: 2,
    maxArgs: 2,
    description:
      'Returns a text result containing only the values that were provided in filterValues',
  },
  {
    name: 'GetAsCSS',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns text converted to the CSS format',
  },
  {
    name: 'GetAsDate',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns dates in text as field type date',
  },
  {
    name: 'GetAsNumber',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns only the numbers in text, as field type number',
  },
  {
    name: 'GetAsSVG',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns text converted to the SVG format',
  },
  { name: 'GetAsText', minArgs: 1, maxArgs: 1, description: 'Returns data as field type text' },
  {
    name: 'GetAsTime',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns times or timestamps in text as field type time',
  },
  {
    name: 'GetAsTimestamp',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns text as field type timestamp',
  },
  {
    name: 'GetAsURLEncoded',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns text as URL encoding, for use as a URL',
  },
  {
    name: 'GetValue',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the requested value given by valueNumber from listOfValues',
  },
  {
    name: 'Left',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the specified numberOfCharacters in text, counting from the left',
  },
  {
    name: 'LeftValues',
    minArgs: 2,
    maxArgs: 2,
    description:
      'Returns values contained in text, according to the specified numberOfValues from left',
  },
  {
    name: 'LeftWords',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns text containing the specified numberOfWords from the left',
  },
  {
    name: 'Length',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the number of characters in text',
  },
  {
    name: 'Lower',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns all letters in specified text as lowercase',
  },
  {
    name: 'Middle',
    minArgs: 3,
    maxArgs: 3,
    description: 'Extracts the specified numberOfCharacters from text, starting at position',
  },
  {
    name: 'MiddleValues',
    minArgs: 3,
    maxArgs: 3,
    description: 'Returns text containing the specified numberOfValues, starting at startingValue',
  },
  {
    name: 'MiddleWords',
    minArgs: 3,
    maxArgs: 3,
    description: 'Returns text containing the specified numberOfWords, starting at startingWord',
  },
  {
    name: 'PatternCount',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the number of occurrences of searchString in text',
  },
  {
    name: 'Position',
    minArgs: 2,
    maxArgs: 3,
    description: 'Returns the starting position of searchString in text',
  },
  {
    name: 'Proper',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the first letter of each word as uppercase and others as lowercase',
  },
  {
    name: 'Quote',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns the text enclosed in quotation marks',
  },
  {
    name: 'Replace',
    minArgs: 3,
    maxArgs: 3,
    description: 'Replaces a string of characters with replacementText',
  },
  {
    name: 'Right',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns the specified numberOfCharacters from the right',
  },
  {
    name: 'RightValues',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns values contained in text, according to numberOfValues from right',
  },
  {
    name: 'RightWords',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns text containing the specified numberOfWords from the right',
  },
  {
    name: 'SerialIncrement',
    minArgs: 2,
    maxArgs: 2,
    description: 'Returns text and numbers, with numbers incremented by specified amount',
  },
  {
    name: 'SortValues',
    minArgs: 1,
    maxArgs: 3,
    description: 'Sorts a list of values based on the specified data type and locale',
  },
  {
    name: 'Substitute',
    minArgs: 2,
    maxArgs: Infinity,
    description:
      'Returns text with searchString replaced by replaceString. Can accept either individual arguments (text, search, replace) or array notation for search/replace pairs.',
    validateArgs: (args: string[]): string | null => {
      if (args.length < 2) {
        return 'Substitute function requires at least a text argument and one search/replace pair';
      }
      // First argument should be the text to search in
      // Remaining arguments can be either:
      // 1. Two strings (search, replace)
      // 2. One or more arrays containing exactly two elements [search, replace]
      return null;
    },
  },
  {
    name: 'Trim',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns text stripped of all leading and trailing spaces',
  },
  {
    name: 'TrimAll',
    minArgs: 1,
    maxArgs: 2,
    description: 'Returns text with specified spaces removed or inserted',
  },
  {
    name: 'UniqueValues',
    minArgs: 1,
    maxArgs: 3,
    description: 'Returns unique values from a list based on data type and locale',
  },
  {
    name: 'Upper',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns all letters in specified text as uppercase',
  },
  {
    name: 'ValueCount',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns a count of the total number of values in text',
  },
  {
    name: 'WordCount',
    minArgs: 1,
    maxArgs: 1,
    description: 'Returns a count of the total number of words in text',
  },
];
