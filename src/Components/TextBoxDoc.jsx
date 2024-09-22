import { useState, React } from 'react';
import { Divider, Code, Chip, TextBox } from 'mist-ui-comp';
import CodeBlock from '../CodeBlock';

function TextBoxDoc({ isDarkMode }) {
  const [activeSection, setActiveSection] = useState(1);
  const typeText = `type="text"`;
  const typeEmail = `type="email"`;
  const typePass = `type="password"`;
  const typeNum = `type="number"`;
  const place = `placeholder="enter text"`;
  const id = `id={id}`;
  const name = `name={name}`;
  const val = `value=''`;
  const darkMode = `darkMode={1}`;

  return (
    <div className={`flex gap-4 ring-1 ml-8 h-full p-4 rounded-md ${isDarkMode ? 'ring-zinc-700 ring-opacity-35' : 'ring-violet-200'}`}>
      <div className='flex flex-col gap-4 flex-grow'>
        <h2 className='text-3xl font-bold text-zinc-400'>TextBox</h2>
        <p className='text-zinc-400'>A Text Box allows users to input text or other data. It can be used to capture information such as names, emails, or any other short to medium-length text data. Text boxes may include a placeholder, label, and various interactive states like focus, blur, and error handling.</p>
        <Divider className="opacity-20" />
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <svg className='h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="npm">
              <path fill="#cb3837" d="M2,38.5H126V82.21H64V89.5H36.44V82.21H2ZM8.89,74.93H22.67V53.07h6.89V74.93h6.89V45.79H8.89ZM43.33,45.79V82.21H57.11V74.93H70.89V45.79Zm13.78,7.29H64V67.64H57.11Zm20.67-7.29V74.93H91.56V53.07h6.89V74.93h6.89V53.07h6.89V74.93h6.89V45.79Z"></path>
            </svg>
            <h4 className='text-lg text-zinc-300 font-semibold'>Installation</h4>
          </div>
          <p>Install npm pack for Mist UI</p>
          <Code darkMode={isDarkMode}>npm i mist-ui-comp@latest</Code>
          <p>Import the CSS in your main application file</p>
          <Code darkMode={isDarkMode}>import 'mist-ui-comp/dist/style.css';</Code>
        </div>
        <Divider className="opacity-20" />

        <div className='flex flex-col'>
          <h4 className='text-lg text-zinc-300 font-semibold'>Usage</h4>

          <div className="flex mb-4">
            <button
              onClick={() => setActiveSection(1)}
              className={`w-24 p-2 text-center transition-colors ${activeSection === 1 ? 'text-violet-400' : 'text-zinc-500'}`}>
              Preview
            </button>
            <button
              onClick={() => setActiveSection(2)}
              className={`w-24 p-2 text-center transition-colors ${activeSection === 2 ? 'text-violet-400' : 'text-zinc-500'}`}>
              Code
            </button>
          </div>

          <div className="w-full flex justify-center items-center h-64 overflow-hidden">
            {activeSection === 1 ? (
              <div className={`backdrop-blur-md bg-opacity-60 border rounded-md ${isDarkMode ? 'bg-zinc-900 border-zinc-700 border-opacity-35' : 'bg-white border-violet-200'}`}>
                <div className={`flex justify-between items-center border-b ${isDarkMode ? 'border-zinc-700 border-opacity-35' : 'border-violet-200'}`}>
                  <div className='flex items-center'>
                    <p className='p-4'>Text box</p>
                  </div>
                  <div className='h-4 w-4 absolute right-14 opacity-25 bg-red-500 rounded-full'></div>
                  <div className='h-4 w-4 absolute right-9 opacity-25 bg-amber-400 rounded-full'></div>
                  <div className='h-4 w-4 absolute right-4 opacity-25 bg-green-500 rounded-full'></div>
                </div>
                <div className='p-10'>
                  <TextBox darkMode={isDarkMode} />
                </div>
              </div>
            ) : (
              <div className='w-full h-full overflow-auto'>
                <CodeBlock 
                  code={`import { TextBox } from 'mist-ui-comp';

function MyForm() {
  return (
    <form>
      <TextBox
        darkMode={dark}
        type={type}
        id={type}
        placeholder={'Text'}
      />
    </form>
  );
}`}
                  language="jsx"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='min-w-64 flex flex-col'>
        <h2 className='text-lg text-violet-300 font-medium'>Props for this component</h2>
        <div className='text-sm my-6 pl-2 ' >
          <dl className='flex flex-col gap-1'>
            <dt className='font-semibold text-violet-700'>Type</dt>
            <dd className='font-mono'>· {typeText} <Chip
              label="New" 
              size='xsm'
              variant='flat'
              color='primary'
            >Default</Chip> </dd>
            <dd className='font-mono'>· {typeEmail}</dd>
            <dd className='font-mono'>· {typePass}</dd>
            <dd className='font-mono'>· {typeNum}</dd>

            <dt className='font-semibold text-violet-700'>Placeholder</dt>
            <dd className='font-mono'>· {place}</dd>
            <dt className='font-semibold text-violet-700'>Id</dt>
            <dd className='font-mono'>· {id}</dd>
            <dt className='font-semibold text-violet-700'>Name</dt>
            <dd className='font-mono'>· {name}</dd>
            <dt className='font-semibold text-violet-700'>Value</dt>
            <dd className='font-mono'>· {val}</dd>
            <dt className='font-semibold text-violet-700'>Dark Mode</dt>
            <dd className='font-mono'>· {darkMode}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default TextBoxDoc;