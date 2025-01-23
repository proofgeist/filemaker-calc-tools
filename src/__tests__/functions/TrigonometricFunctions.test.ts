import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Trigonometric Functions', () => {
  const validator = new FileMakerCalcValidator();

  // No argument functions
  describe('Pi()', () => {
    it('should validate with no arguments', () => {
      const errors = validator.validate('Pi()');
      expect(errors).toHaveLength(0);
    });

    it('should error with any arguments', () => {
      const errors = validator.validate('Pi(1)');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = [
      'Acos',
      'Asin',
      'Atan',
      'Cos',
      'Degrees',
      'Exp',
      'Ln',
      'Log',
      'Radians',
      'Sin',
      'Tan',
    ];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(1)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(1, 2)`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate nested function calls', () => {
      const errors = validator.validate('Sin(Radians(45))');
      expect(errors).toHaveLength(0);
    });

    it('should validate with field references', () => {
      const errors = validator.validate('Cos(Table::Angle)');
      expect(errors).toHaveLength(0);
    });

    it('should validate with Pi', () => {
      const errors = validator.validate('Sin(Pi() / 2)');
      expect(errors).toHaveLength(0);
    });
  });
});
