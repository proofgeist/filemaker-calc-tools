import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Miscellaneous Functions', () => {
  const validator = new FileMakerCalcValidator();

  // No argument functions
  describe('no argument functions', () => {
    const noArgFuncs = ['GetLastError', 'Self'];

    noArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors).toHaveLength(0);
        });

        it('should error with any arguments', () => {
          const errors = validator.validate(`${func}("extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = ['IsValid', 'IsValidExpression'];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("test")`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("test", "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Two argument functions
  describe('two argument functions', () => {
    const twoArgFuncs = ['Let', 'Extend'];

    twoArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("x", 1)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too few arguments', () => {
          const errors = validator.validate(`${func}("x")`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("x", 1, "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Three argument functions
  describe('RGB()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('RGB(255, 255, 255)');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('RGB(255, 255)');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('RGB(255, 255, 255, "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });
});
