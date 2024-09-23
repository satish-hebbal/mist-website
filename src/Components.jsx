import React, { lazy, Suspense } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import ComponentSidebar from './ComponentSidebar';

// Lazy load all components
const TextBoxDoc = lazy(() => import('./Components/TextBoxDoc'));
const TextAreaDoc = lazy(() => import('./Components/TextAreaDoc'));
const CheckBoxDoc = lazy(() => import('./Components/CheckBoxDoc'));
const RadioButtonDoc = lazy(() => import('./Components/RadioButtonDoc'));
const FileUploadDoc = lazy(() => import('./Components/FileUploadDoc'));
const SelectDateDoc = lazy(() => import('./Components/SelectDateDoc'));
const MultiSelectOptionDoc = lazy(() => import('./Components/MultiSeletOptionDoc'));
const SelectOptionDoc = lazy(() => import('./Components/SelectOption'));
const SubmitButtonDoc = lazy(() => import('./Components/SubmitButtonDoc'));
const ToggleSwitchDoc = lazy(() => import('./Components/ToggleSwitchDoc'));
const AccordionDoc = lazy(() => import('./Components/AccordionDoc'));
const BreadCrumbsDoc = lazy(() => import('./Components/BreadCrumbsDoc'));
const ChipDoc = lazy(() => import('./Components/ChipDoc'));
const CircularProgressDoc = lazy(() => import('./Components/CircularProgressDoc'));
const CodeDoc = lazy(() => import('./Components/CodeDoc'));
const ProgressDoc = lazy(() => import('./Components/ProgressDoc'));
const AvatarDoc = lazy(() => import('./Components/AvatarDoc'));
const BadgeDoc = lazy(() => import('./Components/BadgeDoc'));
const DividerDoc = lazy(() => import('./Components/DividerDoc'));
const SliderDoc = lazy(() => import('./Components/SliderDoc'));

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
            case 'AccordionDoc':
                return <AccordionDoc isDarkMode={isDarkMode} />;
            case 'BreadCrumbsDoc':
                return <BreadCrumbsDoc isDarkMode={isDarkMode} />;
            case 'ChipDoc':
                return <ChipDoc isDarkMode={isDarkMode} />;
            case 'CircularProgressDoc':
                return <CircularProgressDoc isDarkMode={isDarkMode} />;
            case 'CodeDoc':
                return <CodeDoc isDarkMode={isDarkMode} />;
            case 'ProgressDoc':
                return <ProgressDoc isDarkMode={isDarkMode} />;
            case 'AvatarDoc':
                return <AvatarDoc isDarkMode={isDarkMode} />;
            case 'BadgeDoc':
                return <BadgeDoc isDarkMode={isDarkMode} />;
            case 'DividerDoc':
                return <DividerDoc isDarkMode={isDarkMode} />;
            case 'SliderDoc':
                return <SliderDoc isDarkMode={isDarkMode} />;
            default:
                return <CheckBoxDoc isDarkMode={isDarkMode} />;
        }
    };

    return (
        <div className={`flex min-h-screen pt-16`}>
            <ComponentSidebar isDarkMode={isDarkMode} />
            
            {/* Main content area */}
            <main className="flex-1 ml-64 p-8">
                <Suspense fallback={<div className='ml-16'>Loading...</div>}>
                    {renderComponent()}
                </Suspense>
            </main>
        </div>
    );
}

export default ComponentsList;