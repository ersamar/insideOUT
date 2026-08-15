import React, { useState } from "react";
import { motion } from "framer-motion";
import AutoHeight from "react-auto-height";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import joy from '../assets/joy.png';
import sadness from '../assets/sadness.png';
import anger from '../assets/anger.png';
import fear from '../assets/fear.png';
import disgust from '../assets/disgust.png';
import anxiety from '../assets/anxiety.png';
import envy from '../assets/envy.png';
import embarassment from '../assets/embarassment.png';
import ennui from '../assets/ennui.png';
import './styles.css';

const sectionData = [
  {
    text: "Joy has sunny yellow skin, blue eyes and a glittery blue pixie cut. Joy has boundless energy and is constantly bouncing around, full of excitement and positivity. Joy sees the positive quality of most other emotions.",
    image: joy,
    backgroundColor: "rgba(255, 240, 0, 0.7)",
  },
  {
    text: "Sadness is sluggish, pessimistic, and prone to fits of melancholy. But she's also empathetic, calm, and thoughtful. Though she's quick with a complaint, Sadness also has plenty of common sense and pragmatism.",
    image: sadness,
    backgroundColor: "#ADD8E6",
  },
  {
    text: " Anger feels very passionately about making sure things are fair for Riley. He has a fiery spirit and tends to explode (literally) when things don't go as planned. He is quick to overreact and has little patience for life's imperfections.",
    image: anger,
    backgroundColor: "#FF0000",
  },
  {
    text: "Fear's main job is to protect Riley and keep her safe. He is constantly on the lookout for potential disasters, and spends time evaluating the possible dangers, pitfalls and risk involved in Riley's everyday activities.",
    image: fear,
    backgroundColor: "rgba(75, 0, 130, 0.5)",
  },
  {
    text: "Disgust is highly opinionated, extremely honest and prevents Riley from getting poisoned — both physically and socially. She keeps a careful eye on the people, places and things that Riley comes into contact with — whether that's broccoli or last year's fashion trend.",
    image: disgust,
    backgroundColor: "#98FB98",
  },
  {
    text: "Content for section 1. Curabitur lobortis id lorem id bibendum.",
    image: anxiety,
    backgroundColor: "#FF4500",
  },
  {
    text: "Envy is Anxiety's second in command, being the only one who is willing to drive the console, unlike Embarrassment and Ennui. Anxiety and Envy share the same goal of pleasing the FireHawk members in order to befriend them.",
    image: envy,
    backgroundColor: "#40E0D0",
  },
  {
    text: "Embarrassment doesn't talk or make eye contact with the other emotions. He usually pulls his jacket strings to hide his face whenever he's flustered. His job is to let Riley know when the things she does are socially inappropriate.",
    image: embarassment,
    backgroundColor: "#FFC0CB",
  },
  {
    text: "Animated as a moody, purple being with bangs, Ennui is the feeling of being both tired and bored.",
    image: ennui,
    backgroundColor: "rgba(131, 111, 255, 0.8)",
  },
];

const Emotions = () => {

  const handleGalleryClick = () => {
    window.open('/gallery', '_blank');
  };

  const [section, setSection] = useState(0);
  const [isBack, setIsBack] = useState(false);

  const changeSection = (nextSection, back = false) => {
    setIsBack(back);
    setSection(nextSection);
  };

  return (
    <div className="emotions-container">
      <h1>Emotions</h1><p className="emotions-para">Emotions are physical and mental states brought on by neurophysiological changes, variously associated with thoughts, feelings, behavioral responses, and a degree of pleasure or displeasure. A feeling such as happiness, love, fear, anger, or hatred, which can be caused by the situation that you are in or the people you are with</p>
      <AutoHeight className="autoHeight">
        {section !== 0 && (
          <button
            onClick={() => changeSection(section - 1, true)}
            className="backBtn"
          >
            <HiOutlineArrowLeft /> Back
          </button>
        )}

        {section < sectionData.length - 1 && (
          <button
            onClick={() => changeSection(section + 1)}
            className="nextBtn"
          >
            Next <HiOutlineArrowRight />
          </button>
        )}

        {sectionData.map((sec, index) => (
          section === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isBack ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <div className="sec-left" style={{ backgroundColor: sec.backgroundColor, }}>
                <img src={sec.image} alt={`section-${index}`} className="sec-img" />
              </div>
              <div className="sec-right">
                <p className="sec-para">{sec.text}</p>
                <button class="btn-24" onClick={handleGalleryClick}><span>Gallery</span></button>
              </div>
            </motion.div>
          )
        ))}
      </AutoHeight>
    </div>
  );
};

export default Emotions;
