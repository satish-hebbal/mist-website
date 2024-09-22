import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { Copy, Check } from 'lucide-react';

function CodeBlock({ code, language, darkMode = true }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const baseClasses = "font-mono text-sm p-4 rounded relative overflow-x-auto";
  const bgColor = darkMode ? "bg-gray-800" : "bg-gray-100";
  const textColor = darkMode ? "text-gray-200" : "text-gray-800";
  const iconColor = darkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-800";


  return (
    <div className={`relative mt-4 rounded overflow-hidden ${bgColor}`}>
      <Highlight theme={darkMode ? themes.vsDark : themes.vsLight} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${baseClasses} ${className} ${textColor}`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <button
        onClick={copyToClipboard}
        className={`absolute top-2 right-2 p-1 bg-zinc-950 rounded-md transition-all ${iconColor} `}

        aria-label="Copy code"
      >
        {isCopied ? <Check size={18} /> : <Copy size={18} />}
      </button>
    </div>
  );
}

export default CodeBlock;
