import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../FileMakerCalcValidator';

describe('FileMakerCalcValidator', () => {
  const validator = new FileMakerCalcValidator();

  describe('basic syntax', () => {
    it('should validate simple arithmetic', () => {
      const errors = validator.validate('1 + 2');
      expect(errors).toHaveLength(0);
    });

    it('should catch unquoted strings', () => {
      const errors = validator.validate(`badstring`);
      expect(errors).toHaveLength(1);
    });

    it('should not catch quoted strings', () => {
      const errors = validator.validate('"bad string"');
      expect(errors).toHaveLength(0);
    });

    it('should NOT catch Table::Field', () => {
      const errors = validator.validate('Table::Field');
      expect(errors).toHaveLength(0);
    });

    it('should catch missing parenthesis', () => {
      const errors = validator.validate('(1 + 2');
      expect(errors).toHaveLength(1);
    });
  });

  describe('function validation', () => {
    it('should validate built-in function', () => {
      const errors = validator.validate('Left(Table::Field, 2)');
      expect(errors).toHaveLength(0);
    });

    it('should validate custom function', () => {
      validator.addCustomFunctions(['MyCustomFunc']);
      const errors = validator.validate('MyCustomFunc("test")');
      expect(errors).toHaveLength(0);
    });
  });

  describe('variable scope validation', () => {
    it('should allow variables declared in Let function', () => {
      const errors = validator.validate('Let([x = 1]; x)');
      expect(errors).toHaveLength(0);
    });

    it('should catch undefined variables in Let function', () => {
      const errors = validator.validate('Let([x = 1]; y)');
      expect(errors).toHaveLength(1);
      expect(errors[0].message).toBe(
        'Undeclared variable: "y". Variables in Let functions must be declared in the Let block.'
      );
    });

    it('should allow global variables with $$ prefix', () => {
      const errors = validator.validate('$$globalVar');
      expect(errors).toHaveLength(0);
    });

    it('should allow local variables with $ prefix', () => {
      const errors = validator.validate('$localVar');
      expect(errors).toHaveLength(0);
    });

    it('should not catch field references', () => {
      const errors = validator.validate('Table::Field');
      expect(errors).toHaveLength(0);
    });

    it('should not catch function names', () => {
      const errors = validator.validate('Left("test", 1)');
      expect(errors).toHaveLength(0);
    });

    it('should not catch Get(AccountGroupName))', () => {
      const errors = validator.validate('Get(AccountGroupName)');
      expect(errors).toHaveLength(0);
    });

    describe('True and False', () => {
      it('should not catch True', () => {
        const errors = validator.validate('True');
        expect(errors).toHaveLength(0);
      });

      it('should not catch False', () => {
        const errors = validator.validate('False');
        expect(errors).toHaveLength(0);
      });
    });

    describe('JSON Constants', () => {
      it('should not catch JSONString', () => {
        const errors = validator.validate('JSONString');
        expect(errors).toHaveLength(0);
      });

      it('should not catch JSONNumber', () => {
        const errors = validator.validate('JSONNumber');
        expect(errors).toHaveLength(0);
      });

      it('should not catch JSONObject', () => {
        const errors = validator.validate('JSONObject');
        expect(errors).toHaveLength(0);
      });

      it('should not catch JSONArray', () => {
        const errors = validator.validate('JSONArray');
        expect(errors).toHaveLength(0);
      });

      it('should not catch JSONBoolean', () => {
        const errors = validator.validate('JSONBoolean');
        expect(errors).toHaveLength(0);
      });

      it('should not catch JSONNull', () => {
        const errors = validator.validate('JSONNull');
        expect(errors).toHaveLength(0);
      });

      it('should not catch JSONRaw', () => {
        const errors = validator.validate('JSONRaw');
        expect(errors).toHaveLength(0);
      });
    });
  });
});
