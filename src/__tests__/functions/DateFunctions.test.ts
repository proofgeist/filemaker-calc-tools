import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Date Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = [
      'Day',
      'DayName',
      'DayOfWeek',
      'DayOfYear',
      'Month',
      'MonthName',
      'WeekOfYear',
      'Year',
    ];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(Date(1, 1, 2023))`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(Date(1, 1, 2023), "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Three argument functions
  describe('Date()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('Date(1, 1, 2023)');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('Date(1, 1)');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('Date(1, 1, 2023, "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });
});
