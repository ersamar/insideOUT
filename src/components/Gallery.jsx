import React from 'react';
import gall1 from '../assets/gall1.jpg'; import gall14 from '../assets/gall14.jpg';
import gall2 from '../assets/gall2.jpg'; import gall15 from '../assets/gall15.jpg';
import gall3 from '../assets/gall3.jpg'; import gall16 from '../assets/gall16.jpg';
import gall4 from '../assets/gall4.jpg'; import gall17 from '../assets/gall17.jpg';
import gall5 from '../assets/gall5.jpg'; import gall18 from '../assets/gall18.jpg';
import gall6 from '../assets/gall6.jpg'; import gall19 from '../assets/gall19.jpg';
import gall7 from '../assets/gall7.jpg'; import gall20 from '../assets/gall20.jpg';
import gall8 from '../assets/gall8.jpg'; import gall21 from '../assets/gall21.jpg';
import gall9 from '../assets/gall9.jpg'; import gall22 from '../assets/gall22.jpg';
import gall10 from '../assets/gall10.jpg'; import gall23 from '../assets/gall23.jpg';
import gall11 from '../assets/gall11.jpg'; import gall24 from '../assets/gall24.jpg';
import gall12 from '../assets/gall2.jpg'; import gall25 from '../assets/gall25.jpg';
import gall13 from '../assets/gall3.jpg'; import gall26 from '../assets/gall26.jpg';

import './gallery.css';
import '../App.css';

const images = [
  [gall1, gall2, gall3, gall4, gall5, gall6, gall7],
  [gall8, gall9, gall10, gall11, gall12, gall13],
  [gall14, gall15, gall16, gall17, gall18, gall19, gall20],
  [gall21, gall22, gall23, gall24, gall25, gall26]
];

const Gallery = () => {
  return (
    <div className="row">
      {images.map((column, columnIndex) => (
        <div className="column" key={columnIndex}>
          {column.map((src, imgIndex) => (
            <img key={imgIndex} src={src} alt={`GalleryImg ${columnIndex}-${imgIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
