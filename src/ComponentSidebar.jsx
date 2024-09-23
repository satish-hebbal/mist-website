import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Chip} from 'mist-ui-comp';

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
    { name: 'Accordion', path: '/components/accordion', isNew: true },
    { name: 'Avatar', path: '/components/avatar', isNew: true },
    { name: 'Badge', path: '/components/badge', isNew: true },
    { name: 'Breadcrumbs', path: '/components/breadcrumbs', isNew: true },
    { name: 'Chip', path: '/components/chip', isNew: true },
    { name: 'CircularProgress', path: '/components/circularprogress', isNew: true },
    { name: 'Code', path: '/components/code', isNew: true },
    { name: 'Divider', path: '/components/divider', isNew: true },
    { name: 'Progress', path: '/components/progress', isNew: true },
    { name: 'Slider', path: '/components/slider', isNew: true }
  ];

  return (
    <aside className={`fixed ml-8 mt-8 rounded-md backdrop-blur-md bg-opacity-30 h-auto w-64 overflow-y-auto p-4 ${
      isDarkMode ? 'bg-zinc-900 bg-opacity-60 text-zinc-500' : 'bg-white bg-opacity-60 text-zinc-800'
    } `}>
      <h2 className="text-xl text-violet-500 mb-4">Componentz</h2>
      <ul>
        {components.map((component) => (
          <li key={component.path} className="mb-2 flex gao-2">
            <Link
              to={component.path}
              className={`block px-2 py text-sm rounded ${
                location.pathname === component.path
                  ? 'bg-violet-600 bg-opacity-50 text-violet-400'
                  : isDarkMode
                  ? 'hover:bg-zinc-800'
                  : 'hover:bg-zinc-100'
              }`}
            >
              {component.name}
            </Link>
            {component.isNew && (
              <Chip
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