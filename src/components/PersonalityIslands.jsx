import React from 'react';
import goofball from '../assets/goofball.jpeg';
import family from '../assets/family.jfif';
import hockey from '../assets/hockey.webp';
import friendship from "../assets/friendship.jpeg";
import honesty from '../assets/honesty.webp';
import science from '../assets/science.webp';
import boyBand from '../assets/boyBand.webp';
import vampire from '../assets/vampire.webp';
import './styles.css';

const cardData = [
  { heading: 'Goofball', backImg: goofball, border: '2px solid skyblue', frontBG: 'rgba(173, 216, 230, 0.5)' },
  { heading: 'Family', backImg: family, border: '2px solid royalblue', frontBG: 'rgba(65, 105, 225, 0.5)' },
  { heading: 'Ice Hockey', backImg: hockey, border: '2px solid skyblue', frontBG: 'rgba(173, 216, 230, 0.5)' },
  { heading: 'Friendship', backImg: friendship, border: '2px solid royalblue', frontBG: 'rgba(65, 105, 225, 0.5)' },
  { heading: 'Honesty', backImg: honesty, border: '2px solid skyblue', frontBG: 'rgba(173, 216, 230, 0.5)' },
  { heading: 'Fashion', backImg: '', border: '2px solid royalblue', frontBG: 'rgba(65, 105, 225, 0.5)' },
  { heading: 'Science', backImg: science, border: '2px solid skyblue', frontBG: 'rgba(173, 216, 230, 0.5)' },
  { heading: 'Boy Band', backImg: boyBand, border: '2px solid royalblue', frontBG: 'rgba(65, 105, 225, 0.5)' },
  { heading: 'Tragic Vampire Romance', backImg: vampire, border: '2px solid skyblue', frontBG: 'rgba(173, 216, 230, 0.5)' },
];

const Islands = () => {
  return (
    <div className='island-container'>
      <h1>Personality Islands</h1>
      <p className='island-para'>Personality refers to the enduring characteristics and behavior that comprise a person's unique adjustment to life, including major traits, interests, drives, values, self-concept, abilities, and emotional patterns.</p>
      <div className='island-content'>
        <div className='island-left'>
          <p>The Islands of Personality are locations in Inside Out inside Riley's mind. They are the representation of the different aspects of Riley's personality that define her as a person. The islands float above the abyss of the Memory Dump and are connected by a long rod to Headquarters. You can see Riley's all personality islands here.</p>
        </div>
        <div className='island-right'>
        <div className="flip-box-container">
        {cardData.map((card, index) => (
          <div key={index} className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front" style={{ border: card.border, backgroundColor: card.frontBG }}>
                <h4>{card.heading}</h4>
              </div>
              <div className="flip-box-back">
                <img src={card.backImg} alt={`Back side ${index + 1}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Islands;
