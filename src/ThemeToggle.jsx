import React from 'react';

const ThemeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`w-14 h-7 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 relative ${
        isDarkMode ? 'bg-violet-600' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full transition-transform duration-300 ease-in-out transform flex items-center justify-center text-xs font-bold ${
          isDarkMode 
            ? 'translate-x-7 bg-white text-violet-600' 
            : 'translate-x-0 bg-violet-500 text-white'
        }`}
      >
        {isDarkMode ? 'D' : 'L'}
      </div>
      <span className={`absolute top-1/2 transform -translate-y-1/2 text-xs font-bold transition-opacity duration-300 ${
        isDarkMode 
          ? 'left-2 opacity-100 text-white' 
          : 'left-2 opacity-0'
      }`}>
        L
      </span>
      <span className={`absolute top-1/2 transform -translate-y-1/2 text-xs font-bold transition-opacity duration-300 ${
        isDarkMode 
          ? 'right-2 opacity-0' 
          : 'right-2 opacity-100 text-violet-600'
      }`}>
        D
      </span>
    </button>
  );
};

export default ThemeToggle;