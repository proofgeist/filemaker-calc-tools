# FileMaker Calc Tools

A TypeScript library for validating and formatting FileMaker calculations.

## Features

- Validate FileMaker calculations using ANTLR4 grammar
- Pretty print FileMaker calculations
- Full TypeScript support
- Supports both CommonJS and ES Modules

## Installation

Since this package is hosted on GitHub Packages, you'll need to authenticate:

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

## Publishing New Versions

Follow these steps exactly to ensure a successful release:

### Pre-release Checklist

- [ ] All changes are committed and pushed to `main`
- [ ] All tests are passing (`pnpm test`)
- [ ] The build is successful (`pnpm run build`)

### Release Steps

1. Update version in `package.json`:

   ```json
   {
     "version": "x.y.z"
   }
   ```

2. Commit the version change:

   ```bash
   git add package.json
   git commit -m "chore: bump version to x.y.z"
   git push origin main
   ```

3. Create and push a tag:

   ```bash
   git tag -a vx.y.z -m "Version x.y.z"
   git push origin vx.y.z
   ```

4. Create a GitHub Release:

   ```bash
   gh release create vx.y.z --title "Version x.y.z" --notes "Release notes here"
   ```

   Alternatively, create the release through the GitHub web interface:

   - Go to Releases
   - Click "Create a new release"
   - Choose the tag
   - Add release notes
   - Click "Publish release"

5. Verify Release:
   - [ ] Check GitHub Actions to confirm the publish workflow has started
   - [ ] Wait for workflow completion
   - [ ] Verify the new version appears in GitHub Packages

Note: The GitHub Action will only trigger when a Release is created, not just when a tag is pushed.
If the workflow doesn't trigger, check that you created a GitHub Release and not just a tag.

### Version Numbering

Follow semantic versioning:

- Major (x.0.0): Breaking changes
- Minor (0.x.0): New features (backwards compatible)
- Patch (0.0.x): Bug fixes and minor changes

## License

MIT
