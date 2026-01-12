import * as ts from "typescript";

export function compileTS(sourceCode: string) {
  const result = ts.transpileModule(sourceCode, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ESNext,
      strict: true,
    },
  });

  return {
    js: result.outputText,
    diagnostics: result.diagnostics ?? [],
  };
}