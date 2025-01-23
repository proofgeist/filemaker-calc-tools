import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Container Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = ['GetHeight', 'GetWidth'];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(Table::Container)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(Table::Container, "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Two argument functions
  describe('GetContainerAttribute()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('GetContainerAttribute(Table::Container, "filename")');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('GetContainerAttribute(Table::Container)');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate(
        'GetContainerAttribute(Table::Container, "filename", "extra")'
      );
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Three argument functions
  describe('GetThumbnail()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate('GetThumbnail(Table::Container, 100, 100)');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('GetThumbnail(Table::Container, 100)');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate('GetThumbnail(Table::Container, 100, 100, "extra")');
      expect(errors.length).toBeGreaterThan(0);
    });
  });
});
