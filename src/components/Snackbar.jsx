// src/components/Snackbar.js
import React from 'react';
import './snackbar.css';

const Snackbar = ({ message, show }) => {
  return (
    <div id="snackbar" className={show ? 'show' : ''}>
      {message}
    </div>
  );
};

export default Snackbar;
