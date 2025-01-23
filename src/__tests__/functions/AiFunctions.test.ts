import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('AI Functions', () => {
  const validator = new FileMakerCalcValidator();

  // All AI functions take exactly two arguments
  describe('two argument functions', () => {
    const twoArgFuncs = ['AIClassify', 'AIPredict', 'AIRewrite', 'AITranslate'];

    twoArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("text", "model")`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too few arguments', () => {
          const errors = validator.validate(`${func}("text")`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("text", "model", "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate with field references', () => {
      const errors = validator.validate('AITranslate(Table::Text, Table::Language)');
      expect(errors).toHaveLength(0);
    });

    it('should validate nested function calls', () => {
      const errors = validator.validate('AIClassify(AITranslate(Table::Text, "en"), "sentiment")');
      expect(errors).toHaveLength(0);
    });
  });
});
