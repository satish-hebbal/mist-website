import React from 'react';
import { useOutletContext, useParams  } from 'react-router-dom';
import mistImage from './assets/peter.png';
import ComponentSidebar from './ComponentSidebar'; // Make sure to import the new component
import TextBoxDoc from './Components/TextBoxDoc';
import TextAreaDoc from './Components/TextAreaDoc';
import CheckBoxDoc from './Components/CheckBoxDoc';
import RadioButtonDoc from './Components/RadioButtonDoc';
import FileUploadDoc from './Components/FileUploadDoc';
import SelectDateDoc from './Components/SelectDateDoc';
import MultiSelectOptionDoc from './Components/MultiSeletOptionDoc';
import SelectOptionDoc from './Components/SelectOption';
import SubmitButtonDoc from './Components/SubmitButtonDoc';
import ToggleSwitchDoc from './Components/ToggleSwitchDoc';


function ComponentsList() {
    const [isDarkMode] = useOutletContext();
    const { componentName } = useParams();

    const renderComponent = () => {
        switch (componentName) {
            case 'TextBoxDoc':
                return <TextBoxDoc isDarkMode={isDarkMode} />;
            case 'TextAreaDoc':
                return <TextAreaDoc isDarkMode={isDarkMode} />;
            case 'CheckBoxDoc':
                return <CheckBoxDoc isDarkMode={isDarkMode} />;
            case 'RadioButtonDoc':
                return <RadioButtonDoc isDarkMode={isDarkMode} />;
            case 'FileUploadDoc':
                return <FileUploadDoc isDarkMode={isDarkMode} />;
            case 'SelectDateDoc':
                return <SelectDateDoc isDarkMode={isDarkMode} />;
            case 'MultiSelectOptionDoc':
                return <MultiSelectOptionDoc isDarkMode={isDarkMode} />;
            case 'SelectOptionDoc':
                return <SelectOptionDoc isDarkMode={isDarkMode} />;
            case 'SubmitButtonDoc':
                return <SubmitButtonDoc isDarkMode={isDarkMode} />;
            case 'ToggleSwitchDoc':
                return <ToggleSwitchDoc isDarkMode={isDarkMode} />;
            // Add cases for other components here
            default:
                return <div>Select a component from the sidebar</div>;
        }
    };

    return (
        <div className={`flex  min-h-screen pt-16 `}>
            <ComponentSidebar isDarkMode={isDarkMode} />
            
            {/* Main content area */}
            <main className="flex-1 ml-64 p-8">
            {renderComponent()}
            </main>
        </div>
    );
}

export default ComponentsList;