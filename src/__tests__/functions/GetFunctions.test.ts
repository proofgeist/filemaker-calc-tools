import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Get Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = [
      'Get',
      'GetField',
      'GetFieldName',
      'GetRequestAttribute',
      'GetResultAttribute',
    ];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("AccountName")`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("AccountName", "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Two argument functions
  describe('two argument functions', () => {
    const twoArgFuncs = ['GetLayoutObjectAttribute', 'GetNthRecord', 'GetRepetition'];

    twoArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("field", 1)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too few arguments', () => {
          const errors = validator.validate(`${func}("field")`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("field", 1, "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });
});
