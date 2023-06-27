import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import React from "react";

export default function ExampleCard({ exampleCode, language }) {
  return (
    <div className='codeExample'>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers={true}
        showInlineLineNumbers={true}
      >
        {exampleCode}
      </SyntaxHighlighter>
    </div>
  );
}
