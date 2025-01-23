# FileMaker Calc Tools

A TypeScript library for validating and formatting FileMaker calculations.

## Features

- Validate FileMaker calculations using ANTLR4 grammar
- Pretty print FileMaker calculations
- Full TypeScript support
- Supports both CommonJS and ES Modules

## Installation

```bash
# Using npm
npm install @proofgeist/filemaker-calc-tools

# Using pnpm
pnpm add @proofgeist/filemaker-calc-tools
```

## Usage

### Validating Calculations

```typescript
import { FileMakerCalcValidator } from '@proofgeist/filemaker-calc-tools';

// Validate a FileMaker calculation
const validator = new FileMakerCalcValidator();
const result = validator.validate('If(1 + 1 = 2; "True"; "False")');

if (result.isValid) {
  console.log('Calculation is valid!');
} else {
  console.log('Validation errors:', result.errors);
}
```

### Pretty Printing

The pretty printer helps format FileMaker calculations with consistent indentation and line breaks. It's especially useful for making complex calculations more readable.

```typescript
import { FileMakerPrettyPrinter } from '@proofgeist/filemaker-calc-tools';

// Basic usage
const printer = new FileMakerPrettyPrinter();
const formatted = printer.format('If(1+1=2;"True";"False")');
console.log(formatted);
// Output:
// If(
//   1 + 1 = 2;
//   "True";
//   "False"
// )

// Customizing indentation
const customPrinter = new FileMakerPrettyPrinter({
  indentChar: '  ', // Use 2 spaces instead of tabs (default is tabs)
});

// Complex example with Let function
const letCalc = printer.format('Let([a=1+1;b=2+2];"Result: "&(a+b))');
console.log(letCalc);
// Output:
// Let([
//   a = 1 + 1;
//   b = 2 + 2
// ];
//   "Result: " & (a + b)
// )
```

The pretty printer will:

- Format function arguments on new lines with proper indentation
- Add spaces around operators for better readability
- Format Let functions with aligned variable declarations
- Validate function names and argument counts
- Preserve string literals and field references

## Development

**Note:** You will need a Java Runtime Environment (JRE) installed to run the `antlr4ts` command for parser generation.

```bash
# Install dependencies
pnpm install

# Generate ANTLR parser
pnpm run antlr4ts

# Build
pnpm run build

# Run tests
pnpm test

# Run tests with coverage
pnpm run test:coverage
```

## License

MIT
