import { describe, it, expect } from 'vitest';
import dedent from 'dedent';
import { prettyPrintFileMakerCalculation } from '../../lib/filemaker-pretty-printer/index';

describe('prettyPrintFileMakerCalculation', () => {
  it('should format a function call with arguments', () => {
    const input = dedent`List(Left("Hello World"; 5);"A")
`;
    const expected = dedent`
    List(
      Left(
        "Hello World" ;
        5
      ) ;
      "A"
    )
    `;

    const result = prettyPrintFileMakerCalculation(input);

    expect(result).toBe(expected);
  });

  it('should comment out a function with too many arguments', () => {
    const input = dedent`Left("Hello World"; 5; "extra")`;
    const expected = dedent`
    /*
    Left(
      "Hello World" ;
      5 ;
      "extra"
    )
    */
    /* Too many arguments for Left. Expected at most 2, got 3 */`;

    const result = prettyPrintFileMakerCalculation(input);
    expect(result).toBe(expected);
  });

  it('should format a nested function call with arguments', () => {
    const input = dedent`Let([
fullName = List(
	Left("Hello World1"; 5); 
	"A"
);
secretname="ghost"
];

List(fullName;secretName)

)`;
    const expected = dedent`
    Let([
      fullName = List(
        Left(
          "Hello World1" ;
          5
        ) ;
        "A"
      );
      secretname = "ghost"
    ];
      List(
        fullName ;
        secretName
      )
    )`;

    const result = prettyPrintFileMakerCalculation(input);

    expect(result).toBe(expected);
  });
});
