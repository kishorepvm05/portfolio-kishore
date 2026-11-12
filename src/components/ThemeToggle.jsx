import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = ({ isDark, onToggle }) => {
  return (
    <button
      className="theme-toggle-btn"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      {isDark ? (
        <Sun size={17} className="transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon size={17} className="transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
