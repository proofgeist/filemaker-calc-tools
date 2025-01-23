# FileMaker Calc Tools

A TypeScript library for validating and transpiling FileMaker calculations to JavaScript/TypeScript.

## Features

- Validate FileMaker calculations using ANTLR4 grammar
- (Coming soon) Convert FileMaker calculations to TypeScript/JavaScript
- Full TypeScript support
- Supports both CommonJS and ES Modules

## Installation

Since this is a private package hosted on GitHub, you'll need to set up authentication first:

1. Create a GitHub Personal Access Token with `read:packages` scope
2. Create a `.npmrc` file in your project with:

```
@proofgeist:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

Then install the package:

```bash
# Using npm
npm install @proofgeist/filemaker-calc-tools

# Using pnpm
pnpm add @proofgeist/filemaker-calc-tools
```

Or add directly to your package.json:

```json
{
  "dependencies": {
    "@proofgeist/filemaker-calc-tools": "github:proofgeist/filemaker-calc-tools#main"
  }
}
```

## Usage

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

## Development

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
