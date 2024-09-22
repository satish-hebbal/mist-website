import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`px-12 py-2 ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="container mx-auto flex flex-grow justify-between text-center">
      <a href="https://www.linkedin.com/in/satish-hebbal/" target="_blank" rel="noopener noreferrer">
        <p className="text-sm">My LinkedIn</p>
      </a>
        <p className="text-sm">
          My personal project, for you ☕
        </p>
        <a href="https://github.com/satish-hebbal" target="_blank" rel="noopener noreferrer">
        <p className="text-sm">My GitHub</p>
      </a>
      </div>
    </footer>
  );
};

export default Footer;