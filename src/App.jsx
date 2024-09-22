import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  CheckBox, 
  FileUpload, 
  MultiSelectOption, 
  RadioButton, 
  SelectDate, 
  SelectOption, 
  SubmitButton, 
  TextArea, 
  TextBox, 
  ToggleSwitch 
} from 'mist-ui-comp';
import { useOutletContext } from 'react-router-dom';
import AniToggle from './AniToggle'
import mistImage from './assets/Mist.png';

const ScrollingComponents = ({ darkMode }) => {
  const [multiSelectValue, setMultiSelectValue] = useState([]);
  const [selectedRadioOption, setSelectedRadioOption] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    'Checkbox Option 1': false,
    'Checkbox Option 2': false,
  });

  const handleMultiSelectChange = (newValue) => {
    setMultiSelectValue(newValue);
  };

  const handleRadioChange = (option) => {
    setSelectedRadioOption(option);
  };

  const handleCheckboxChange = (option) => {
    setCheckboxes(prevState => ({
      ...prevState,
      [option]: !prevState[option]
    }));
  };

  const radioOptions = ['Radio Option 1', 'Radio Option 2'];

  const components = [
    { type: TextBox, props: { placeholder: 'Enter text', darkMode } },
    { type: TextArea, props: { placeholder: 'Enter description', darkMode } },
    { type: MultiSelectOption, props: {
      options: ['Option 1', 'Option 2', 'Option 3'],
      value: multiSelectValue,
      onChange: handleMultiSelectChange,
      placeholder: 'Select options',
      darkMode
    }},
    ...radioOptions.map(option => ({
      type: RadioButton,
      props: {
        label: option,
        checked: selectedRadioOption === option,
        onChange: () => handleRadioChange(option),
        name: "scrollingRadioGroup",
        darkMode
      }
    })),
    ...Object.keys(checkboxes).map(option => ({
      type: CheckBox,
      props: {
        label: option,
        checked: checkboxes[option],
        onChange: () => handleCheckboxChange(option),
        darkMode
      }
    })),
    { type: SubmitButton, props: { text: 'Submit', darkMode } },
  ];

  const allComponents = [...components, ...components, ...components];

  return (
    <div className="scrolling-container">
      <div className="scrolling-content">
        {allComponents.map((component, index) => (
          <div key={index} className="component-wrapper">
            {React.createElement(component.type, component.props)}
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [isDarkMode] = useOutletContext();
  const [email, setEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFeedbackMessage('');
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setFeedbackMessage('Please enter an email address.');
      setFeedbackType('error');
    } else if (!validateEmail(email)) {
      setFeedbackMessage('Please enter a valid email address.');
      setFeedbackType('error');
    } else {
      setFeedbackMessage('Cool! you will be updated.');
      setFeedbackType('success');
      console.log('Email submitted:', email);
    }
  };

  return (
    <main className="container mx-auto pt-[80px] px-8 relative">
      {/* <div className="component-showcase">
        <ScrollingComponents darkMode={isDarkMode ? 1 : 0} />
      </div> */}
      
      <div className=' flex mb-16 '>

      <div className=' py-24 pl-8 flex flex-col justify-center'>
      <h1 className="text-5xl font-regular text-zinc-400 mb-4">
        Streamline Your UI
        <br />
        <span className="font-montserrat font-semibold block my-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-zinc-400">
          Import, Build and Ship
        </span> 
        with <span className="font-caveat text-transparent bg-clip-text bg-gradient-to-r from-violet-700 font-bold to-zinc-400">Mist</span> UI.
      </h1>
      <p className="text-md mb-8 max-w-2xl leading-6">
        This component library streamlines your development workflow, enhancing productivity and organization in every project.
      </p>

      <div className="flex flex-row items-center gap-6 ">
        <p>Install via npm</p>
        <Link to="/docs">
          <SubmitButton text="Submit" label={'Try now!'} />
        </Link>
      </div>
      </div>

      <div className=''></div>
      </div>

      <div className={`rounded-lg mb-8 p-8 backdrop-blur-md bg-opacity-20 ${
        isDarkMode 
          ? 'bg-zinc-800 border border-zinc-700' 
          : 'bg-white border border-gray-200'
      } shadow-lg transition-all duration-300 flex`}>
        <div className="flex-1 pr-4">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">
            Be the first to know about new components and updates. Sign up for email notifications!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex gap-4">
              <div className="">
                <TextBox
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  darkMode={isDarkMode ? 1 : 0}
                  className="w-full"
                />
              </div>
              <SubmitButton
                text="Notify Me"
                onClick={handleSubmit}
              />
            </div>
            {feedbackMessage && (
              <p className={`text-sm mt-1 ${feedbackType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {feedbackMessage}
              </p>
            )}
          </form>
          
          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy and won't share your email with anyone else.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src={mistImage} alt="Mist UI" className={`${
            isDarkMode 
              ? 'opacity-10' 
              : 'opacity-30'
          } max-w-full max-h-28 object-contain`} />
        </div>
      </div>
    </main>
  );
}

export default App;