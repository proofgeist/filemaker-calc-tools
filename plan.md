You are an expert software development assistant specializing in language parsing and code analysis.

Your task is to guide the creation of a TypeScript-based tool that validates FileMaker calculation syntax. This tool will be designed with future AI integration in mind, meaning we need to build this tool in a modular fashion to allow for AI enhancements later.

Here are the key requirements for the initial version of this tool:

1.  **Grammar Definition:**
    *   Using ANTLR (ANother Tool for Language Recognition), create a robust grammar for the FileMaker calculation language. This grammar should, at a minimum:
         *   Handle basic arithmetic operations (+, -, *, /).
         *   Handle comparison operators (=, >, <, ≠, ≤, ≥).
         *   Handle logical operators (AND, OR, NOT).
         *   Handle string concatenation (&).
         *   Handle parentheses for expression grouping.
         *   Handle numbers (integers and decimals), strings (with double quotes), and boolean literals (true, false).
         *   Handle field references in the format `TableName::FieldName`.
         *    Handle comments ( `/* */` for multi-line comments and `//` for single-line comments)
         *   Handle basic function calls with zero or more arguments (e.g., `Function()`, `Function(arg1)`, `Function(arg1, arg2)`).
         *    Be flexible enough to accommodate custom functions, while initially providing a list of built-in functions.
         *   Handle repetition syntax (e.g., `[1]`, `[n]`).
    *   The grammar should be modular and well-commented to facilitate future extensions (e.g., to support advanced functions and syntax).
2.  **Parser Generation:**
    *   Use the ANTLR toolchain to generate TypeScript lexer and parser files from the grammar.
    *   Ensure the generated code is clean, well-structured, and follows common TypeScript coding conventions.
3.  **Base Functionality:**
    *   Create a TypeScript function that:
        *   Takes a FileMaker calculation string as input.
        *   Parses the string using the generated ANTLR lexer and parser.
        *   Checks for syntax errors and reports them (using the ANTLR error listener, or a simple error count).
        *   Has a method for adding a list of custom function names.
        *  Validates function calls against the built-in functions and the list of custom functions.
        *   Returns: an array of errors (as strings) if there were syntax or function call errors, or an empty array if the calculation is syntactically valid.
    *  Include a list of commonly used FileMaker functions (e.g., `If()`, `Let()`, `Get()`, `IsEmpty()`, `Left()`, `Right()`, `Middle()`, etc.)
4.  **AI Integration Considerations:**
    *   Design the validator with modularity and future extensibility in mind so it is easier to integrate future AI enhancements:
        *   Use well-defined interfaces and data structures for better AI interactions.
        *   For example, the syntax errors should be returned in a structured format (e.g. object with properties like error message, line number, column number etc.).
        *  Make sure to separate out concerns into their own class (e.g. the parser, the visitor, etc).
    *   Think about how an AI could potentially enhance this tool later (e.g., suggesting fixes to syntax errors, suggesting improvements to the formula, understanding formula context etc.)

**Please provide:**

*   The ANTLR grammar file (.g4).
*   The generated TypeScript lexer and parser files.
*   The TypeScript function that validates FileMaker calculations using the parser with examples on how to call it.
*   A list of common FileMaker built-in functions that is used by your validator.
*   Clear and detailed comments throughout your code.

Your focus should be on achieving a solid and modular base functionality, not on implementing advanced AI features in this initial stage.

Let's create a powerful and extensible FileMaker calculation validator!