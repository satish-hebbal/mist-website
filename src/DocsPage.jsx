import React from 'react';
import { CheckBox, FileUpload, SubmitButton, TextBox, ToggleSwitch } from 'mist-ui-comp';
import CodeBlock from './CodeBlock';
import { useOutletContext } from 'react-router-dom';

function DocsPage() {
    const [isDarkMode] = useOutletContext();
  return (
    <main className="container mx-auto mt-16 px-8 ">
      <section className={`rounded-lg p-8 backdrop-blur-md bg-opacity-20 ${
        isDarkMode 
          ? 'bg-zinc-800 border border-zinc-700' 
          : 'bg-white border border-gray-200'
      } shadow-lg transition-all duration-300`}>
        {/* className={`rounded-lg p-8 backdrop-blur-md bg-opacity-20 ${
        isDarkMode 
          ? 'bg-zinc-800 border border-zinc-700' 
          : 'bg-white border border-gray-200'
      } shadow-lg transition-all duration-300`} */}
        <h2 className="text-3xl font-bold mb-4">Quick Start</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            Install Mist UI:
            <CodeBlock code="npm install mist-ui-comp@latest" language="bash" />
          </li>
          <li>
            Import the CSS in your main application file:
            <CodeBlock code="import 'mist-ui-comp/dist/style.css';" language="javascript" />
          </li>
          <li>
            Import and use components in your React components:
            <CodeBlock 
              code={`import { CheckBox, SubmitButton } from 'mist-ui-comp';

function MyForm() {
  return (
    <form>
      <CheckBox label="Accept terms" />
      <SubmitButton text="Submit" />
    </form>
  );
}`} 
              language="jsx"
            />
          </li>
        </ol>
      </section>

      {/* ... (keep the rest of the content) ... */}

    </main>
  );
}

export default DocsPage;