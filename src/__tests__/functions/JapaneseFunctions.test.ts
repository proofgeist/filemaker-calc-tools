import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Japanese Functions', () => {
  const validator = new FileMakerCalcValidator();

  // All Japanese functions take exactly one argument
  describe('single argument functions', () => {
    const singleArgFuncs = [
      'KanaHankaku',
      'KanaZenkaku',
      'KanjiNumeral',
      'RomanHankaku',
      'RomanZenkaku',
    ];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("テスト")`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("テスト", "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate nested function calls', () => {
      const errors = validator.validate('KanaZenkaku(KanaHankaku("テスト"))');
      expect(errors).toHaveLength(0);
    });

    it('should validate with field references', () => {
      const errors = validator.validate('KanjiNumeral(Table::Number)');
      expect(errors).toHaveLength(0);
    });
  });
});
