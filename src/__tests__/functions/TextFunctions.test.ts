import { describe, it, expect } from 'vitest';
import { FileMakerCalcValidator } from '../../FileMakerCalcValidator';

describe('Text Functions', () => {
  const validator = new FileMakerCalcValidator();

  // Single argument functions
  describe('single argument functions', () => {
    const singleArgFuncs = [
      'Char',
      'Code',
      'GetAsCSS',
      'GetAsDate',
      'GetAsNumber',
      'GetAsSVG',
      'GetAsText',
      'GetAsTime',
      'GetAsTimestamp',
      'GetAsURLEncoded',
      'Length',
      'Lower',
      'Proper',
      'Quote',
      'Trim',
      'Upper',
      'ValueCount',
      'WordCount',
    ];

    singleArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("test")`);
          expect(errors).toHaveLength(0);
        });

        it('should error with no arguments', () => {
          const errors = validator.validate(`${func}()`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("test", "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Two argument functions
  describe('two argument functions', () => {
    const twoArgFuncs = [
      'Exact',
      'Filter',
      'FilterValues',
      'GetValue',
      'Left',
      'LeftValues',
      'LeftWords',
      'PatternCount',
      'Right',
      'RightValues',
      'RightWords',
      'SerialIncrement',
    ];

    twoArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("test", 2)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too few arguments', () => {
          const errors = validator.validate(`${func}("test")`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("test", 2, "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Three argument functions
  describe('three argument functions', () => {
    const threeArgFuncs = ['Middle', 'MiddleValues', 'MiddleWords', 'Replace'];

    threeArgFuncs.forEach((func) => {
      describe(`${func}()`, () => {
        it('should validate with correct argument count', () => {
          const errors = validator.validate(`${func}("test", 1, 2)`);
          expect(errors).toHaveLength(0);
        });

        it('should error with too few arguments', () => {
          const errors = validator.validate(`${func}("test", 1)`);
          expect(errors.length).toBeGreaterThan(0);
        });

        it('should error with too many arguments', () => {
          const errors = validator.validate(`${func}("test", 1, 2, "extra")`);
          expect(errors.length).toBeGreaterThan(0);
        });
      });
    });
  });

  // Special case: Substitute function with variable arguments
  describe('Substitute()', () => {
    it('should validate with 3 arguments (basic form)', () => {
      const errors = validator.validate('Substitute("test", "t", "x")');
      expect(errors).toHaveLength(0);
    });

    it('should validate with array notation for search/replace pairs', () => {
      const errors = validator.validate('Substitute("test", ["t"; "x"])');
      expect(errors).toHaveLength(0);
    });

    it('should validate with multiple array pairs', () => {
      const errors = validator.validate('Substitute("test", ["t"; "x"], ["s"; "y"])');
      expect(errors).toHaveLength(0);
    });

    it('should error with too few arguments', () => {
      const errors = validator.validate('Substitute("test")');
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should error with incomplete array pair', () => {
      const errors = validator.validate('Substitute("test", ["t"])');
      expect(errors.length).toBeGreaterThan(0);
    });
  });

  // Variable argument functions
  describe('variable argument functions', () => {
    describe('Position()', () => {
      it('should validate with 2 arguments', () => {
        const errors = validator.validate('Position("test", "t")');
        expect(errors).toHaveLength(0);
      });

      it('should validate with 3 arguments', () => {
        const errors = validator.validate('Position("test", "t", 2)');
        expect(errors).toHaveLength(0);
      });

      it('should error with too few arguments', () => {
        const errors = validator.validate('Position("test")');
        expect(errors.length).toBeGreaterThan(0);
      });

      it('should error with too many arguments', () => {
        const errors = validator.validate('Position("test", "t", 2, "extra")');
        expect(errors.length).toBeGreaterThan(0);
      });
    });

    describe('TrimAll()', () => {
      it('should validate with 1 argument', () => {
        const errors = validator.validate('TrimAll("test")');
        expect(errors).toHaveLength(0);
      });

      it('should validate with 2 arguments', () => {
        const errors = validator.validate('TrimAll("test", true)');
        expect(errors).toHaveLength(0);
      });

      it('should error with too many arguments', () => {
        const errors = validator.validate('TrimAll("test", true, "extra")');
        expect(errors.length).toBeGreaterThan(0);
      });
    });

    describe('SortValues() and UniqueValues()', () => {
      ['SortValues', 'UniqueValues'].forEach((func) => {
        describe(`${func}()`, () => {
          it('should validate with 1 argument', () => {
            const errors = validator.validate(`${func}("test")`);
            expect(errors).toHaveLength(0);
          });

          it('should validate with 2 arguments', () => {
            const errors = validator.validate(`${func}("test", 1)`);
            expect(errors).toHaveLength(0);
          });

          it('should validate with 3 arguments', () => {
            const errors = validator.validate(`${func}("test", 1, "en")`);
            expect(errors).toHaveLength(0);
          });

          it('should error with too many arguments', () => {
            const errors = validator.validate(`${func}("test", 1, "en", "extra")`);
            expect(errors.length).toBeGreaterThan(0);
          });
        });
      });
    });
  });

  // Complex syntax tests
  describe('complex syntax', () => {
    it('should validate nested function calls', () => {
      const errors = validator.validate('Upper(Left(Lower("TEST"), 2))');
      expect(errors).toHaveLength(0);
    });

    it('should validate functions with field references', () => {
      const errors = validator.validate('Length(Table::Field)');
      expect(errors).toHaveLength(0);
    });

    it('should validate functions in calculations', () => {
      const errors = validator.validate('Left("test", 2) & Right("test", 2)');
      expect(errors).toHaveLength(0);
    });
  });
});
