import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('JSON Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Two argument functions
  describe('two argument functions', () => {
    const twoArgFuncs = ['JSONDeleteElement', 'JSONGetElement', 'JSONListKeys', 'JSONListValues'];

    twoArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}(Table::JsonField, Table::Key)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too few arguments', () => {
          const errors = validator.validate(`${func}(Table::JsonField)`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}(Table::JsonField, Table::Key, Table::Extra)`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Variable argument functions
  describe('JSONFormatElements()', () => {
    it('should validate with one argument', () => {
      const errors = validator.validate('JSONFormatElements(Table::JsonField)');
      expect(errors).toHaveLength(0);
    });

    it('should validate with two arguments', () => {
      const errors = validator.validate('JSONFormatElements(Table::JsonField, Table::Format)');
      expect(errors).toHaveLength(0);
    });

    it('should error with no arguments', () => {
      const errors = validator.validate('JSONFormatElements()');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate(
        'JSONFormatElements("{ ""key"": ""value"" }", true, "extra")'
      );
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Four argument functions
  describe('JSONSetElement()', () => {
    it('should validate with correct argument count', () => {
      const errors = validator.validate(
        'JSONSetElement(Table::JsonField, Table::Key, Table::Value, Table::Type)'
      );
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('JSONSetElement("{ ""key"": ""value"" }", "key", "value")');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with too many arguments', () => {
      const errors = validator.validate(
        'JSONSetElement("{ ""key"": ""value"" }", "key", "value", 0, "extra")'
      );
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate basic JSON string', () => {
      const errors = validator.validate('JSONGetElement("{}", "key")');
      expect(errors).toHaveLength(0);
    });

    it('should validate basic JSONSetElement', () => {
      const errors = validator.validate('JSONSetElement("{}", "key", "value", 0)');
      expect(errors).toHaveLength(0);
    });

    it('should validate JSONGetElement with complex JSON', () => {
      const errors = validator.validate('JSONGetElement("{ ""key"": ""value"" }", "key")');
      expect(errors).toHaveLength(0);
    });

    it('should validate nested function as argument', () => {
      const errors = validator.validate(
        'JSONSetElement("{}", "key", JSONGetElement("{}", "key"), 0)'
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate with field references', () => {
      const errors = validator.validate('JSONGetElement(Table::JsonField, "key")');
      expect(errors).toHaveLength(0);
    });

    describe('string literal handling', () => {
      it('should validate with FileMaker double quotes', () => {
        const errors = validator.validate('JSONGetElement("{ ""key"": ""value"" }", "key")');
        expect(errors).toHaveLength(0);
      });

      it('should validate with simple JSON', () => {
        const errors = validator.validate('JSONGetElement("{}", "key")');
        expect(errors).toHaveLength(0);
      });

      it('should validate with nested quotes', () => {
        const errors = validator.validate(
          'JSONGetElement("{ ""nested"": { ""key"": ""value"" } }", "key")'
        );
        expect(errors).toHaveLength(0);
      });
    });
  });
});
