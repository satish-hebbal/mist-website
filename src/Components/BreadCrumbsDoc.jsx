import { useState, React } from 'react';
import { Divider, Code, Chip, Breadcrumbs, BreadcrumbItem } from 'mist-ui-comp';
import CodeBlock from '../CodeBlock';

function BreadCrumbsDoc({ isDarkMode }) {
  const [activeSection, setActiveSection] = useState(1);

  const variantProp = `variant="solid"`;
  const darkModeProp = `darkMode={isDarkMode}`;

  const textColor = isDarkMode ? 'text-zinc-400' : 'text-zinc-700';
  const headingColor = isDarkMode ? 'text-zinc-300' : 'text-zinc-800';
  const codeBlockBg = isDarkMode ? 'bg-zinc-800' : 'bg-gray-100';

  const breadcrumbItems = ['Home', 'Category', 'Subcategory', 'Current Page'];

  return (
    <div className={`flex gap-4 ring-1 ml-8 h-screen p-4 rounded-md ${isDarkMode ? 'ring-zinc-700 ring-opacity-35' : 'ring-violet-200'}`}>
      <div className='flex flex-col gap-4 flex-grow overflow-y-auto pr-4 scrollbar-hide'>
        <h2 className='text-3xl font-bold text-zinc-400'>Breadcrumbs</h2>
        <p className={textColor}>The Breadcrumbs component provides a navigation aid that shows the user's location within a website's hierarchy. It supports multiple styles and dark mode, with interactive items that respond to user clicks.</p>
        <Divider className="opacity-20" />
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <svg className='h-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="npm">
              <path fill="#cb3837" d="M2,38.5H126V82.21H64V89.5H36.44V82.21H2ZM8.89,74.93H22.67V53.07h6.89V74.93h6.89V45.79H8.89ZM43.33,45.79V82.21H57.11V74.93H70.89V45.79Zm13.78,7.29H64V67.64H57.11Zm20.67-7.29V74.93H91.56V53.07h6.89V74.93h6.89V53.07h6.89V74.93h6.89V45.79Z"></path>
            </svg>
            <h4 className={`text-lg ${headingColor} font-semibold`}>Installation</h4>
          </div>
          <p className={textColor}>Install npm pack for Mist UI</p>
          <Code darkMode={isDarkMode}>npm i mist-ui-comp@latest</Code>
          <p className={textColor}>Import the CSS in your main application file</p>
          <Code darkMode={isDarkMode}>import 'mist-ui-comp/dist/style.css';</Code>
        </div>
        <Divider className="opacity-15" />

        <div className='flex flex-col'>
          <h4 className={`text-lg ${headingColor} font-semibold`}>Usage</h4>

          <div className="flex mb-4">
            <button
              onClick={() => setActiveSection(1)}
              className={`w-24 p-2 text-center transition-colors ${activeSection === 1 ? 'text-violet-600' : 'text-zinc-500'}`}>
              Preview
            </button>
            <button
              onClick={() => setActiveSection(2)}
              className={`w-24 p-2 text-center transition-colors ${activeSection === 2 ? 'text-violet-600' : 'text-zinc-500'}`}>
              Code
            </button>
          </div>

          <div className="w-full flex justify-center items-center h-[400px] overflow-hidden">
            {activeSection === 1 ? (
              <div className={`backdrop-blur-md bg-opacity-60 border rounded-md w-full ${isDarkMode ? 'bg-zinc-900 border-zinc-700 border-opacity-35' : 'bg-white border-violet-200'}`}>
                <div className={`flex justify-between items-center border-b ${isDarkMode ? 'border-zinc-700 border-opacity-35' : 'border-violet-200'}`}>
                  <div className='flex items-center'>
                    <p className='p-4'>Breadcrumbs</p>
                  </div>
                  <div className='h-4 w-4 absolute right-14 opacity-25 bg-red-500 rounded-full'></div>
                  <div className='h-4 w-4 absolute right-9 opacity-25 bg-amber-400 rounded-full'></div>
                  <div className='h-4 w-4 absolute right-4 opacity-25 bg-green-500 rounded-full'></div>
                </div>
                <div className='p-10 space-y-4'>
                  <div>
                    <p className={`mb-2 ${textColor}`}>Solid variant:</p>
                    <Breadcrumbs variant="solid" darkMode={isDarkMode}>
                      {breadcrumbItems.map((item, index) => (
                        <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
                      ))}
                    </Breadcrumbs>
                  </div>
                  <div>
                    <p className={`mb-2 ${textColor}`}>Bordered variant:</p>
                    <Breadcrumbs variant="bordered" darkMode={isDarkMode}>
                      {breadcrumbItems.map((item, index) => (
                        <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
                      ))}
                    </Breadcrumbs>
                  </div>
                  <div>
                    <p className={`mb-2 ${textColor}`}>Light variant:</p>
                    <Breadcrumbs variant="light" darkMode={isDarkMode}>
                      {breadcrumbItems.map((item, index) => (
                        <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
                      ))}
                    </Breadcrumbs>
                  </div>
                </div>
              </div>
            ) : (
              <div className={`w-full h-96 rounded-md overflow-auto ${codeBlockBg}`}>
                <CodeBlock 
                  code={`import { Breadcrumbs, BreadcrumbItem } from 'mist-ui-comp';

function MyComponent() {
  return (
    <>
      <Breadcrumbs variant="solid" darkMode={isDarkMode}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Subcategory</BreadcrumbItem>
        <BreadcrumbItem>Current Page</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs variant="bordered" darkMode={isDarkMode}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Subcategory</BreadcrumbItem>
        <BreadcrumbItem>Current Page</BreadcrumbItem>
      </Breadcrumbs>

      <Breadcrumbs variant="light" darkMode={isDarkMode}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Category</BreadcrumbItem>
        <BreadcrumbItem>Subcategory</BreadcrumbItem>
        <BreadcrumbItem>Current Page</BreadcrumbItem>
      </Breadcrumbs>
    </>
  );
}`}
                  language="jsx"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='min-w-64 flex flex-col overflow-y-auto'>
        <h2 className={`text-lg ${isDarkMode ? 'text-violet-300' : 'text-violet-600'} font-medium`}>Props for this component</h2>
        <div className='text-sm my-6 pl-2 ' >
          <dl className='flex flex-col gap-1'>
            <dt className={`font-semibold ${isDarkMode ? 'text-violet-400' : 'text-violet-700'}`}>variant</dt>
            <dd className='font-mono'>· {variantProp}</dd>
            <dt className={`font-semibold ${isDarkMode ? 'text-violet-400' : 'text-violet-700'}`}>Dark Mode</dt>
            <dd className='font-mono'>· {darkModeProp}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbsDoc;