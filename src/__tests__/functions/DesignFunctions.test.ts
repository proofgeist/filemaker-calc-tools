import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Design Functions', () => {
  const validator = new FileMakerCalcValidator();

  // No argument functions
  describe('GetWindowName()', () => {
    it('should validate with no arguments', () => {
      const errors = validator.validate('GetWindowName()');
      expect(errors).toHaveLength(0);
    });

    it('should error with any arguments', () => {
      const errors = validator.validate('GetWindowName("extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Optional argument functions
  describe('optional argument functions', () => {
    const optionalArgFuncs = ['GetLayoutName', 'GetTableName'];

    optionalArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors).toHaveLength(0);
        });

        it('should validate with one argument', () => {
          const errors = validator.validate(`${func}("Layout")`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("Layout", "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Variable argument functions
  describe('ExecuteSQL()', () => {
    it('should validate with three arguments', () => {
      const errors = validator.validate('ExecuteSQL("SELECT * FROM table", "", "")');
      expect(errors).toHaveLength(0);
    });

    it('should validate with four arguments', () => {
      const errors = validator.validate('ExecuteSQL("SELECT * FROM table", "", "", "")');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('ExecuteSQL("SELECT * FROM table", "")');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('ExecuteSQL("SELECT * FROM table", "", "", "", "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });
});
