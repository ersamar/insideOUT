import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import mem1 from '../assets/mem1.png';
import mem2 from '../assets/mem2.png';
import mem3 from '../assets/mem3.png';
import mem4 from '../assets/mem4.png';
import mem5 from '../assets/mem5.png';
import mem6 from '../assets/mem6.png';
import './styles.css';

function Memories() {
  return (
    <div className='memories-container'>
      <h1>Memories</h1><p>Memory is the power to retain and recall information and past experiences. Your brain's memory helps you recall lots of memories — like multiplication tables and bad dates. The word memory applies to both the individual facts and experiences you remember as well as the brain's ability to contain it all.</p>
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src={mem1}
          alt="Birthday"
        />
        <Carousel.Caption>
          <h3>Riley's Birthday</h3>
          <p>Look at me Aren't I a little bundle of joy?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src={mem2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>The Airplane Spoon</h3>
          <p>Little Riley finds broccoli disgusting, but a playful airplane spoon from Dad makes it fun and delicious!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src={mem3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>1st Ice Hockey Goal</h3>
          <p>Riley's triumphant first ice hockey goal captures the thrill of achievement and the joy of sportsmanship</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src={mem4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Synchronized Steps</h3>
          <p>Riley and her friend attempt synchronized walking, giggling as they match each other's steps, creating a moment of playful friendship.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src={mem5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Riley's Honesty</h3>
          <p>Riley bravely admits to breaking something, showing her integrity and the value of honesty in relationships.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-carousel-img"
          src={mem6}
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3>Unexpected Playfulness</h3>
          <p>Riley playfully stuffs food into her dad's mouth, prompting laughter from her mom at her delightful goofiness.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Memories;
