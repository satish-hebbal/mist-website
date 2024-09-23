import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Chip } from 'mist-ui-comp';

const ComponentSidebar = ({ isDarkMode }) => {
  const location = useLocation();
  
  const components = [
    { name: 'CheckBox', path: '/Components/CheckBoxDoc' },
    { name: 'FileUpload', path: '/Components/FileUploadDoc' },
    { name: 'MultiSelectOption', path: '/Components/MultiSelectOptionDoc' },
    { name: 'RadioButton', path: '/Components/RadioButtonDoc' },
    { name: 'SelectDate', path: '/Components/SelectDateDoc' }, 
    { name: 'SelectOption', path: '/Components/SelectOptionDoc' },
    { name: 'SubmitButton', path: '/Components/SubmitButtonDoc' },
    { name: 'TextArea', path: '/Components/TextAreaDoc' },
    { name: 'TextBox', path: '/Components/TextBoxDoc' },
    { name: 'ToggleSwitch', path: '/Components/ToggleSwitchDoc' },
    { name: 'Accordion', path: '/Components/AccordionDoc', isNew: true },
    { name: 'Avatar', path: '/Components/AvatarDoc', isNew: true },
    { name: 'Badge', path: '/Components/BadgeDoc', isNew: true },
    { name: 'Breadcrumbs', path: '/Components/BreadCrumbsDoc', isNew: true },
    { name: 'Chip', path: '/Components/ChipDoc', isNew: true },
    { name: 'CircularProgress', path: '/Components/CircularProgressDoc', isNew: true },
    { name: 'Code', path: '/Components/CodeDoc', isNew: true },
    { name: 'Divider', path: '/Components/DividerDoc', isNew: true },
    { name: 'Progress', path: '/Components/ProgressDoc', isNew: true },
    { name: 'Slider', path: '/Components/SliderDoc', isNew: true }
  ];

  return (
    <aside className={`fixed ml-8 mt-8 rounded-md backdrop-blur-md bg-opacity-30 h-auto w-64 overflow-y-auto p-4 ${
      isDarkMode ? 'bg-zinc-900 bg-opacity-60 text-zinc-500' : 'bg-white bg-opacity-60 text-zinc-800'
    } `}>
      <h2 className="text-xl text-violet-500 mb-4">Componentz</h2>
      <ul>
        {components.map((component) => (
          <li key={component.path} className="mb-2 flex gap-2">
            <Link
              to={component.path}
              className={`block px-2 py text-sm rounded ${
                location.pathname === component.path || (location.pathname === '/components' && component.name === 'CheckBox')
                  ? 'bg-violet-600 bg-opacity-50 text-violet-400'
                  : isDarkMode
                  ? 'hover:bg-zinc-800'
                  : 'hover:bg-zinc-100'
              }`}
            >
              {component.name}
            </Link>
            {component.isNew && (
              <Chip className="ml-1"
                label="New" 
                size='xsm'
                variant='flat'
                color='secondary'
              >new</Chip>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ComponentSidebar;