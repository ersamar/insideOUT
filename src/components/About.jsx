import React from 'react';
// import anxiety from '../assets/anxiety.png';
import riley from '../assets/riley.jpg';
import './styles.css';

const About = () => {
    const handleReadMoreClick = () => {
      window.open('/more-about', '_blank');
    };
  return (
    <div className="about-container">
      <h1>About</h1>
      <div className='about-content'>
      <div className="about-left">
        <p className='about-para'>
          Hello, and welcome to my personal space on the internet. My name is Ersa Amar, and I am a web developer, designer, and creative thinker. While I find joy in creating beautiful and functional digital experiences, I often navigate through my work and life with a companion that many might not see – anxiety. There are days when even the simplest tasks can feel overwhelming, and self-doubt tends to creep in at every turn. Despite this, I strive to pour my heart and soul into every piece of work I create, hoping to turn my inner turmoil into something meaningful and impactful.
        </p>
        <button class="btn-24" onClick={handleReadMoreClick}><span>Read More</span></button>
        </div>

        <div className='about-right'><img src={riley} alt="Riley" className='riley' /></div>
        </div>
    </div>
  );
};

export default About;
