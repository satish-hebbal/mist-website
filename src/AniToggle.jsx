import React from 'react';

const AniToggle = ({ isToggled, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`w-14 h-7 rounded-full p-1 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-violet-500 relative ${
        isToggled ? 'bg-violet-600' : 'bg-gray-300'
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full transition-transform duration-200 ease-in-out transform flex items-center justify-center text-xs font-bold shadow-md ${
          isToggled 
            ? 'translate-x-7 bg-white shadow-[0px_0px_10px_2px_rgba(139,92,246,0.6)]' 
            : 'translate-x-0 bg-violet-500 shadow-[0px_0px_5px_1px_rgba(139,92,246,0.3)]'
        }`}
      />
    </button>
  );
};

export default AniToggle;
