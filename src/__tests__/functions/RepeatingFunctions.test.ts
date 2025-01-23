import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Repeating Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Single argument functions
  describe('Last()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('Last(Table::Field)');
      expect(errors).toHaveLength(0);
    });

    it('should error with no arguments', () => {
      const errors = validator.validate('Last()');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('Last(Table::Field, "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Two argument functions
  describe('two argument functions', () => {
    const twoArgFuncs = ['Extend', 'GetRepetition', 'GetNthRecord'];

    twoArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(Table::Field, 1)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too few arguments', () => {
          const errors = validator.validate(`${func}(Table::Field)`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(Table::Field, 1, "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate nested function calls', () => {
      const errors = validator.validate('GetRepetition(Table::Field, Last(Table::Field))');
      expect(errors).toHaveLength(0);
    });
  });
});
