import React from 'react';
import { useOutletContext, useParams  } from 'react-router-dom';
import mistImage from './assets/peter.png';
import ComponentSidebar from './ComponentSidebar'; // Make sure to import the new component
import TextBoxDoc from './Components/TextBoxDoc';

function ComponentsList() {
    const [isDarkMode] = useOutletContext();
    const { componentName } = useParams();

    const renderComponent = () => {
        switch (componentName) {
            case 'TextBoxDoc':
                return <TextBoxDoc isDarkMode={isDarkMode} />;
            // case 'CheckboxDocumentation':
            //     return <CheckboxDocumentation isDarkMode={isDarkMode} />;
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