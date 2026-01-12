import Editor from "@monaco-editor/react";

interface Props {
  jsCode: string;
}

const JavaScriptOutput = ({ jsCode }: Props) => {
  return (
    <div className="w-full h-full">
      <Editor
        height="100%"
        language="javascript"
        value={jsCode}
        theme="vs-light"
        options={{
          readOnly: true,
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: "on",
        }}
      />
    </div>
  );
};

export default JavaScriptOutput;
