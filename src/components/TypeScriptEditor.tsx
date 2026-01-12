import Editor from "@monaco-editor/react";
import type { OnMount } from "@monaco-editor/react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const TypeScriptEditor = ({ value, onChange }: Props) => {
  const handleEditorDidMount: OnMount = (editor, monaco) => {

    // 1️⃣ Inject minimal DOM typings (CRITICAL)
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      `
      interface Console {
        log(...data: any[]): void;
        error(...data: any[]): void;
        warn(...data: any[]): void;
      }
      declare var console: Console;
      `,
      "ts:console.d.ts"
    );

    // 2️⃣ Compiler options
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2020,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      strict: true,
      noEmit: true,
    });

    // 3️⃣ Enable diagnostics
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
    });

    // 4️⃣ Create a REAL TypeScript model with .ts URI
    const model = monaco.editor.createModel(
      value || "\n",
      "typescript",
      monaco.Uri.parse("file:///main.ts")
    );

    editor.setModel(model);
  };

  return (
    <div className="w-full h-full">
      <Editor
        height="100%"
        language="typescript"
        theme="vs-light"
        onMount={handleEditorDidMount}
        onChange={(val) => onChange(val || "")}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
};

export default TypeScriptEditor;
