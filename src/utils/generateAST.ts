import * as ts from "typescript";

export function generateAST(sourceCode: string) {
  const sourceFile = ts.createSourceFile(
    "main.ts",
    sourceCode,
    ts.ScriptTarget.ES2020,
    true,
    ts.ScriptKind.TS
  );

  function visit(node: ts.Node): any {
    return {
      kind: ts.SyntaxKind[node.kind],
      text: node.getText(sourceFile),
      children: node.getChildren(sourceFile).map(visit),
    };
  }

  return visit(sourceFile);
}
