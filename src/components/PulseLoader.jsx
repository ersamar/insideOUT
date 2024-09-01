import React from 'react';
import './pulseloader.css';

const PulseLoader = () => {
  return (
    <div className="container">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="dot" key={index} style={{ transform: `rotate(${index * 45}deg)` }}>
          <div className="inner-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default PulseLoader;
