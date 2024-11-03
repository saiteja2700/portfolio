// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/Themecontext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
    </div>
  );
};

export default ThemeToggle;
