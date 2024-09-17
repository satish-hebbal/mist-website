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
import BGball from './BGball'; 

const FloatingBoxes = ({ darkMode, multiSelection, handleMultiChange }) => {
  const options = ['Time travel', 'Fly solo', 'Speak to animals', 'Shape-shift'];
  
  const [isOn, setIsOn] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    Pencil: false,
    Brush: false,
  });

  const [selectedOption, setSelectedOption] = useState('');
  const radioOptions = ['Aurat', 'Mard'];

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const handleCheckboxChange = (option) => {
    setCheckboxes(prevState => ({
      ...prevState,
      [option]: !prevState[option]
    }));
  };

  return (
    <div className="absolute top-0 right-[-50px] w-full h-full pointer-events-none overflow-x-hidden">
      <div className="absolute top-[120px] right-[-10px] w-96 h-10 bg-transparent z-30 pointer-events-auto">
        <TextBox darkMode={darkMode} />
      </div>
      <div className="absolute top-[175px] right-[-60px] w-96 h-24 bg-transparent z-20 pointer-events-auto">
        <TextArea darkMode={darkMode} />
      </div>
      <div className="absolute top-[175px] right-[335px] w-96 h-10 bg-transparent z-20 pointer-events-auto">
      <MultiSelectOption
          options={options}
          value={multiSelection}
          onChange={handleMultiChange}
          placeholder="Select multiple options"
          darkMode={darkMode}
        />
      </div>
      <div className="absolute top-[355px] right-20 w-10 h-10 bg-transparent z-10 pointer-events-auto">
        <AniToggle isToggled={isOn} onToggle={toggleSwitch}/>
      </div>
      <div className="absolute w-[800px] h-[200px] top-[100px] rotate-45 right-[-140px] bg-violet-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="absolute flex flex-col gap-2 top-[40px] right-14  w-38 h-10 bg-transparent z-50 pointer-events-auto">
      {radioOptions.map((option) => (
                  <div key={option} className="mt-2">
                    <RadioButton
                      label={option}
                      checked={selectedOption === option}
                      onChange={() => handleRadioChange(option)}
                      name="updateFrequency"
                      darkMode={darkMode}
                    />
                  </div>
                ))}
      </div>
      <div className="absolute flex  gap-4 top-[305px] right-[245px]  w-20 h-10 bg-transparent z-50 pointer-events-auto">
      {Object.keys(checkboxes).map((option) => (
                  <CheckBox
                    key={option}
                    label={`${option}`}
                    checked={checkboxes[option]}
                    onChange={() => handleCheckboxChange(option)}
                    darkMode={darkMode}
                    
                  />
                ))}
      </div>
    </div>
  );
};

function App() {
  const [isDarkMode] = useOutletContext();
  const [multiSelection, setMultiSelection] = useState([]);
  const [email, setEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState(''); // 'success' or 'error'

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleMultiChange = (newValue) => {
    setMultiSelection(newValue);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFeedbackMessage(''); // Clear feedback when user starts typing
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
      // Here you would typically handle the email submission to your backend
      // setEmail(''); // Uncomment this if you want to clear the email field after successful submission
    }
  };

  return (
    <main className="container mx-auto pt-[80px] px-8 relative ">
      <FloatingBoxes 
        darkMode={isDarkMode ? 1 : 0}
        multiSelection={multiSelection}
        handleMultiChange={handleMultiChange} 
      />
      
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

      <div className="flex flex-row items-center gap-6 mb-16">
        <p>Install via npm</p>
        <Link to="/docs">
          <SubmitButton text="Submit" label={'Try now!'} />
        </Link>
      </div>

      <div className={`rounded-lg p-8 backdrop-blur-md bg-opacity-20 ${
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
          <img src={mistImage} alt="Mist UI" className={` ${
        isDarkMode 
          ? 'opacity-10' 
          : 'opacity-30'
      } max-w-full max-h-28 object-contain opacity-3` }/>
        </div>
      </div>
    </main>
  );
}

export default App;