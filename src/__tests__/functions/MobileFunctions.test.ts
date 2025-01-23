import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Mobile Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = ['LocationValues', 'GetSensor', 'DeviceValues'];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("all")`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("all", "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Two argument functions
  describe('GetVoiceInput()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('GetVoiceInput("prompt", "en")');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('GetVoiceInput("prompt")');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('GetVoiceInput("prompt", "en", "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate with field references', () => {
      const errors = validator.validate('GetVoiceInput(Table::Prompt, Table::Language)');
      expect(errors).toHaveLength(0);
    });
  });
});
