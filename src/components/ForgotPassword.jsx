import React, { useState } from 'react';
import { auth, sendPasswordResetEmail } from '../firebase/firebase';
import anger from '../assets/anger.gif';
import './styles.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Password reset email sent. Check your inbox.');
        alert('Password reset email sent. Check your inbox.');
        setMessage('');
        setEmail('');
      })
      .catch((error) => {
        setError(`Error sending reset email: ${error.message}`);
        alert(`Error sending reset email: ${error.message}`);
      });
  };

  return (
    <div className="forgot-password-container">
      <h2>Don't forget your password again !!</h2>
      <form onSubmit={handleResetPassword}>
        <div className="wrap-input-2">
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="reset-password-btn">Send Link</button>
        </div>
      </form>
      <img src={anger} alt="anger" id='anger' />
    </div>
  );
};

export default ForgotPassword;
