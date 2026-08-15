// home.jsx
import React, { useState, useEffect } from 'react';
// import bgVideo from '../assets/bg2.mp4';
import bgimg from '../assets/bg3.jpg'
import Navbar from '../components/Navbar';
import './styles.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`home-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
      {/* <video autoPlay loop muted className='bg-video'>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <img src={bgimg} alt="" className='bg-img' />
      <Navbar />
      {/* <div className='content'>
        <p>Inside Out themed content</p>
      </div> */}
    </div>
  );
};

export default Home;
