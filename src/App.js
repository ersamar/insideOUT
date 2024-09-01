import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Emotions from './components/Emotions';
import Islands from './components/PersonalityIslands';
import Memories from './components/Memories';
import Contact from './components/Contact';
import Security from './components/Security';
import MoreAbout from './components/MoreAbout';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import News from './components/News';
import ForgotPassword from './components/ForgotPassword';
import Circle from './circle';
import '../src/components/styles.css';
import './global.css';
import './App.css';

const predefinedPositions = [
  { top: '10%', left: '20%' },
  { top: '30%', left: '40%' },
  { top: '50%', left: '60%' },
  { top: '70%', left: '80%' },
  { top: '80%', left: '10%' },
  { top: '60%', left: '30%' },
  { top: '40%', left: '50%' },
  { top: '20%', left: '70%' },
  { top: '10%', left: '80%' },
  { top: '50%', left: '10%' },
];

const colors = [
  'rgb(255, 0, 0)',   // red
  'rgb(0, 255, 0)',   // green
  'rgb(0, 0, 255)',   // blue
  'rgb(255, 255, 0)', // yellow
  'rgb(64, 224, 208)',// turquoise
  'rgb(0, 255, 255)', // cyan
  'rgb(128, 0, 128)', // purple
  'rgb(255, 165, 0)', // orange
  'rgb(75, 0, 130)',  // indigo
  'rgb(255, 192, 203)'// pink
];

const MainContent = () => (
  <div className="App">
    {predefinedPositions.map((pos, index) => (
      <Circle key={index} top={pos.top} left={pos.left} color={colors[index % colors.length]} />
    ))}
    <section id="home">
      <Home />
    </section>
    <div className='section'>
      <section id="about">
        <About />
      </section>
      <section id="emotions">
        <Emotions />
      </section>
      <section id="islands">
        <Islands />
      </section>
      <section id="memories">
        <Memories />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/security" element={<Security />} />
        <Route path="/more-about" element={<MoreAbout />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="*" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
