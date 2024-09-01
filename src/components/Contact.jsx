import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import React, { useState } from 'react';
import Snackbar from './Snackbar';
import './styles.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const contactRef = collection(db, 'contact');
      await addDoc(contactRef, {
        name,
        email,
        subject,
        message,
        timestamp: serverTimestamp()
      });
      setSubmitted(true);
      setShowSnackbar(true);
      // Clear the form after submission
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <div className='contact-content'>
        <div className='contact-left'>
          <form className='contact-form' onSubmit={handleSubmit}>
            <div className="wrap-input-1">
              <input
                className="input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span className="focus-border"></span>
            </div>
            <div className="wrap-input-1">
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="focus-border"></span>
            </div>
            <div className="wrap-input-1">
              <input
                className="input"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <span className="focus-border"></span>
            </div>
            <div className="wrap-input-1">
              <textarea
                className="comment"
                placeholder="Type your message here"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="send-btn">Send message</button>
            {submitted && <p className="submitted-message">Message submitted successfully!</p>}
          </form>
        </div>
        <div className='contact-right'>
          <p>We value your feedback! Your thoughts and suggestions are essential to us as we strive to improve our website and provide you with the best possible experience. Whether you have comments about our content, ideas for new features, or just want to share your overall experience, we want to hear from you. Please fill out the form below and let us know how we can make our site better for you. Your feedback is greatly appreciated and helps us continually enhance our services. Thank you for taking the time to share your insights with us!</p>
        </div>
      </div>
      {/* Snackbar component */}
      {showSnackbar && <Snackbar message="Message sent successfully!" onClose={() => setShowSnackbar(false)} />}
    </div>
  );
};

export default Feedback;
