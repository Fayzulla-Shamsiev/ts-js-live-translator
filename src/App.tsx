import { useState } from "react";
import TypeScriptEditor from "./components/TypeScriptEditor";
import JavaScriptOutput from "./components/JavaScriptOutput";
import { compileTS } from "./utils/compileTS";

function App() {
  const [tsCode, setTsCode] = useState("");
  const [jsCode, setJsCode] = useState("");


  function handleTSChange(newCode: string) {
    setTsCode(newCode);
    const result = compileTS(newCode);
    setJsCode(result.js);



  }

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden bg-white">
      
      
      {/* Top Editors */}
      <div className="flex flex-1 gap-5 min-w-0">
        {/* TypeScript Editor Panel */}
        <div className="w-1/2 min-w-0 flex flex-col bg-[#F8F8F8] border border-[#E0E0E0] p-5 rounded-xl shadow-sm">
          <h2 className="text-sm font-semibold mb-3 text-[#616161] tracking-wide">
            TypeScript
          </h2>
          <div className="flex-1 min-h-0">
            <TypeScriptEditor value={tsCode} onChange={handleTSChange} />
          </div>
        </div>

        {/* JavaScript Output Panel */}
        <div className="w-1/2 min-w-0 flex flex-col bg-[#F8F8F8] border border-[#E0E0E0] p-5 rounded-xl shadow-sm">
          <h2 className="text-sm font-semibold mb-3 text-[#616161] tracking-wide">
            JavaScript
          </h2>
          <div className="flex-1 min-h-0">
            <JavaScriptOutput jsCode={jsCode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
