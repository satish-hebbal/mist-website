import React, { useState } from 'react';
import { Checkbox } from 'mist-ui-comp';

const CheckboxDocumentation = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="font-montserrat text-violet-200 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">CheckBox</h1>
      <p className="mb-6">CheckBox component allows users to select one or more items from a set of options.</p>

      <h2 className="text-2xl font-semibold mb-4">Import</h2>
      <div className="bg-gray-800 p-4 rounded-md mb-6">
        <code className="text-violet-300">
          import &#123; CheckBox &#125; from './components/CheckBox';
        </code>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Usage</h2>
      <div className="space-y-4 mb-6">
        <h3 className="text-xl font-semibold">Preview</h3>
        <div className="p-4 bg-gray-800 rounded-md">
          <CheckBox
            label="Option"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            darkMode={true}
          />
        </div>

        <h3 className="text-xl font-semibold">Code</h3>
        <div className="bg-gray-800 p-4 rounded-md">
          <pre className="text-violet-300">
            {`const [isChecked, setIsChecked] = useState(false);

<CheckBox
  label="Option"
  checked={isChecked}
  onChange={() => setIsChecked(!isChecked)}
  darkMode={true}
/>`}
          </pre>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Props</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2 border border-gray-700">Prop</th>
            <th className="p-2 border border-gray-700">Type</th>
            <th className="p-2 border border-gray-700">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border border-gray-700">label</td>
            <td className="p-2 border border-gray-700">string</td>
            <td className="p-2 border border-gray-700">The label text for the checkbox</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-700">checked</td>
            <td className="p-2 border border-gray-700">boolean</td>
            <td className="p-2 border border-gray-700">The checked state of the checkbox</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-700">onChange</td>
            <td className="p-2 border border-gray-700">function</td>
            <td className="p-2 border border-gray-700">Callback function when the checkbox state changes</td>
          </tr>
          <tr>
            <td className="p-2 border border-gray-700">darkMode</td>
            <td className="p-2 border border-gray-700">boolean</td>
            <td className="p-2 border border-gray-700">Enable dark mode styling</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckboxDocumentation;