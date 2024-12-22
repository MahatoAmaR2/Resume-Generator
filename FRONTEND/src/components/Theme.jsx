import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.style.setProperty('--bg-color', isDarkMode ? '#333' : '#fff');
    document.documentElement.style.setProperty('--text-color', isDarkMode ? '#fff' : '#000');
  }, [isDarkMode]);

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle Theme
      </button>
      <p>This is a theme toggle example using CSS variables.</p>
    </div>
  );
};

export default ThemeToggle;
