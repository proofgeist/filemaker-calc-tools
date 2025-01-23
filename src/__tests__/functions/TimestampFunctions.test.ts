import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Timestamp Functions', () => {
  const validator = new FileMakerCalcValidator();

  describe('Timestamp()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('Timestamp(1, 1, 2023, 12, 0, 0)');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('Timestamp(1, 1, 2023, 12, 0)');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('Timestamp(1, 1, 2023, 12, 0, 0, "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  describe('GetAsTimestamp()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('GetAsTimestamp("1/1/2023 12:00:00")');
      expect(errors).toHaveLength(0);
    });

    it('should error with no arguments', () => {
      const errors = validator.validate('GetAsTimestamp()');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('GetAsTimestamp("1/1/2023 12:00:00", "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });
});
