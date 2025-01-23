import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Financial Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Two argument functions
  describe('NPV()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('NPV(0.1, List(Table::CashFlow))');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('NPV(0.1)');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('NPV(0.1, List(Table::CashFlow), "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Three argument functions
  describe('three argument functions', () => {
    const threeArgFuncs = ['FV', 'PMT', 'PV'];

    threeArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(0.1, 12, 1000)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too few arguments', () => {
          const errors = validator.validate(`${func}(0.1, 12)`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(0.1, 12, 1000, "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate nested function calls', () => {
      const errors = validator.validate('PMT(NPV(0.1, List(Table::Rate)), 12, 1000)');
      expect(errors).toHaveLength(0);
    });

    it('should validate with field references', () => {
      const errors = validator.validate('FV(Table::Rate, Table::Periods, Table::Payment)');
      expect(errors).toHaveLength(0);
    });
  });
});
