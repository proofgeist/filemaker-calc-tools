export interface FunctionDefinition {
  name: string;
  minArgs: number;
  maxArgs: number;
  description?: string;
  category?: string;
  validateArgs?: (args: string[]) => string | null;
}
