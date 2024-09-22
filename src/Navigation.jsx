import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import {Chip} from 'mist-ui-comp';


const Navigation = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return ( 
    <nav className={`fixed backdrop-blur-md bg-opacity-60 top-0 left-0 right-0 z-50 mx-8 rounded-br-md rounded-bl-md p-4 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="text-2xl text-zinc-500 ml-4 font-semibold">
            <span className="font-caveat ml-4 text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-zinc-400">Mist</span> UI
          </span>
              <Chip
                label="version" 
                size='xsm'
                variant='flat'
                color='secondary'>ver 1 . 1 . 1</Chip>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className={`hover:text-violet-500 ${isActive('/') ? 'text-violet-500 font-bold' : ''}`}>Home</Link>
          <Link to="/docs" className={`hover:text-violet-500 ${isActive('/docs') ? 'text-violet-500 font-bold' : ''}`}>Docs</Link>
          <Link to="/components" className={`hover:text-violet-500 ${isActive('/components') ? 'text-violet-500 font-bold' : ''}`}>Components</Link>
          <Link to="/examples" className={`hover:text-violet-500 ${isActive('/examples') ? 'text-violet-500 font-bold' : ''}`}>Examples</Link>
          <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;