grammar FileMakerCalc;

// Parser Rules
calculation
    : expression EOF
    ;

expression
    : literal                                                  # LiteralExpr
    | fieldReference                                          # FieldExpr
    | functionCall                                            # FunctionExpr
    | '(' expression ')'                                      # ParenExpr
    | expression '[' expression ']'                           # RepetitionExpr
    | expression op=('*' | '/') expression                    # MultiplicativeExpr
    | expression op=('+' | '-') expression                    # AdditiveExpr
    | expression '&' expression                               # ConcatenationExpr
    | expression op=('=' | '≠' | '<' | '>' | '≤' | '≥') expression  # ComparisonExpr
    | NOT expression                                          # NotExpr
    | expression AND expression                               # AndExpr
    | expression OR expression                                # OrExpr
    ;

functionCall
    : IDENTIFIER '(' argumentList? ')'
    ;

argumentList
    : expression (',' expression)*
    ;

fieldReference
    : IDENTIFIER '::' IDENTIFIER ('[' expression ']')?
    ;

literal
    : NUMBER                    # NumberLiteral
    | STRING                    # StringLiteral
    | BOOLEAN                   # BooleanLiteral
    ;

// Lexer Rules
AND: [Aa][Nn][Dd];
OR: [Oo][Rr];
NOT: [Nn][Oo][Tt];
BOOLEAN: 'True' | 'False' | 'true' | 'false';

NUMBER
    : DIGIT+ ('.' DIGIT+)?
    | '.' DIGIT+
    ;

STRING: '"' (~["\r\n] | '""')* '"';

IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

// Comments
BLOCK_COMMENT: '/*' .*? '*/' -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;

// Whitespace
WS: [ \t\r\n]+ -> skip;

// Fragments
fragment DIGIT: [0-9]; 