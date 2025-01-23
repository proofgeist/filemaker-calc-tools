import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Number Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = ['Abs', 'Ceiling', 'Floor', 'Int'];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(123)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(123, 456)`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Two argument functions
  describe('two argument functions', () => {
    const twoArgFuncs = ['Mod', 'Round', 'Truncate'];

    twoArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(123, 2)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too few arguments', () => {
          const errors = validator.validate(`${func}(123)`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(123, 2, 3)`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Special cases
  describe('Random()', () => {
    it('should validate with no arguments', () => {
      const errors = validator.validate('Random()');
      expect(errors).toHaveLength(0);
    });

    it('should error with any arguments', () => {
      const errors = validator.validate('Random(1)');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate nested function calls', () => {
      const errors = validator.validate('Abs(Round(123.456, 2))');
      expect(errors).toHaveLength(0);
    });

    it('should validate functions with field references', () => {
      const errors = validator.validate('Round(Table::Field, 2)');
      expect(errors).toHaveLength(0);
    });
  });
});
