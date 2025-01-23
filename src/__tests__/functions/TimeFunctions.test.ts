import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Time Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = ['Hour', 'Minute', 'Seconds'];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(Time(12, 0, 0))`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(Time(12, 0, 0), "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Three argument functions
  describe('Time()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('Time(12, 0, 0)');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('Time(12, 0)');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('Time(12, 0, 0, "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });
});
