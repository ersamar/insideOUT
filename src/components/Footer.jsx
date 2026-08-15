import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './styles.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (
    <div className="footer">
      <p>&copy; 2024 ERSA AMAR. All rights reserved.</p>
      <div className='scroll-box'>
      <span className='scroll-to-top' onClick={scrollToTop}><FaArrowUp /></span>
      </div>
    </div>
  );
};

export default Footer;
