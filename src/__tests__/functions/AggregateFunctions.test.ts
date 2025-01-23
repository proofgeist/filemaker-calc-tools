import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Aggregate Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = [
      'Average',
      'Count',
      'Max',
      'Min',
      'StDev',
      'StDevP',
      'Sum',
      'Variance',
      'VarianceP',
    ];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(Table::Field)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(Table::Field, "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Variable argument functions
  describe('List()', () => {
    it('should validate with one argument', () => {
      const errors = validator.validate('List(Table::Field)');
      expect(errors).toHaveLength(0);
    });

    it('should validate with two arguments', () => {
      const errors = validator.validate('List(Table::Field, ", ")');
      expect(errors).toHaveLength(0);
    });

    it('should error with no arguments', () => {
      const errors = validator.validate('List()');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('List(Table::Field, ", ", "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate nested function calls', () => {
      const errors = validator.validate('Sum(If(Table::Field > 0, Table::Field, 0))');
      expect(errors).toHaveLength(0);
    });

    it('should validate with field references', () => {
      const errors = validator.validate('Average(Table::NumberField)');
      expect(errors).toHaveLength(0);
    });
  });
});
