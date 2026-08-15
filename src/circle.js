import React from 'react';
import './App.css';

const Circle = ({ top, left, color }) => {
  return (
    <div className="circle" style={{ top, left, backgroundColor: color }}></div>
  );
};

export default Circle;
