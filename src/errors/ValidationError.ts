export interface ValidationErrorLocation {
  line: number;
  column: number;
  length?: number;
}

export class ValidationError {
  constructor(public readonly message: string, public readonly location: ValidationErrorLocation) {}

  toString(): string {
    return `Error at line ${this.location.line}, column ${this.location.column}: ${this.message}`;
  }
}
