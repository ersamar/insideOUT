import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import './styles.css';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load the dark mode state from localStorage
    const savedDarkMode = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(savedDarkMode);

    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    // Save the dark mode state to localStorage
    localStorage.setItem('isDarkMode', newDarkMode);

    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.open('/security', '_parent');
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-brand">insideOUT</div>
      <button className="custom-navbar-toggle" onClick={handleToggle}>
        ☰
      </button>
      <div className="toggle-switch">
        <a href="#toggle">
          <label className="switch">
            <input type="checkbox" onChange={handleDarkModeToggle} checked={isDarkMode} />
            <span className="slider"></span>
          </label>
        </a>
      </div>
      <ul className={`custom-navbar-nav ${isNavExpanded ? 'active' : ''}`}>
        <li className="custom-nav-item">
          <HashLink smooth to="/#home" className="custom-nav-link">Home</HashLink>
        </li>
        <li className="custom-nav-item">
          <HashLink smooth to="/#about" className="custom-nav-link">About</HashLink>
        </li>
        <li className="custom-nav-item">
          <HashLink smooth to="/#contact" className="custom-nav-link">Contact</HashLink>
        </li>
        <li className="custom-nav-item">
          <a href="#login" className="custom-nav-link" onClick={handleLoginClick}>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
