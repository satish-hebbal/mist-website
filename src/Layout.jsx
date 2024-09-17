import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const bgStyle = {
    backgroundImage: `radial-gradient(${isDarkMode ? '#ffffff10' : '#00000010'} 1px, transparent 1px)`,
    backgroundSize: '20px 20px',
  };
  
  useEffect(() => {
    // Update scrollbar colors based on theme
    if (isDarkMode) {
      document.documentElement.style.setProperty('--scrollbar-track', '#1f1f1f');
      document.documentElement.style.setProperty('--scrollbar-thumb', '#18181b');
      document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#372f45');
    } else {
      document.documentElement.style.setProperty('--scrollbar-track', '#f3f4f6');
      document.documentElement.style.setProperty('--scrollbar-thumb', '#8b5cf6');
      document.documentElement.style.setProperty('--scrollbar-thumb-hover', '#7c3aed');
    }
  }, [isDarkMode]);
  
  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-zinc-950 text-zinc-500' : 'bg-gray-100 text-zinc-900'}`} style={bgStyle}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto flex-grow mb-8 overflow-x-hidden">
        <Outlet context={[isDarkMode, toggleDarkMode]} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Layout;