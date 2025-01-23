import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../FileMakerCalcValidator';

describe('FileMakerCalcValidator', () => {
  const validator = new FileMakerCalcValidator();

  describe('basic syntax', () => {
    it('should validate simple arithmetic', () => {
      const errors = validator.validate('1 + 2');
      expect(errors).toHaveLength(0);
    });

    it('should catch missing parenthesis', () => {
      const errors = validator.validate('(1 + 2');
      expect(errors).toHaveLength(1);
    });
  });

  describe('function validation', () => {
    it('should validate built-in function', () => {
      const errors = validator.validate('Left("hello", 2)');
      expect(errors).toHaveLength(0);
    });

    it('should validate custom function', () => {
      validator.addCustomFunctions(['MyCustomFunc']);
      const errors = validator.validate('MyCustomFunc("test")');
      expect(errors).toHaveLength(0);
    });
  });
});
