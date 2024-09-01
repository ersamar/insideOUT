// src/components/Security.jsx
import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import { auth, googleProvider, facebookProvider, twitterProvider, githubProvider } from '../firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Circle from '../circle';
import Snackbar from './Snackbar';
import '../App.css';
import './security.css';

const Security = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      setSnackbarMessage("Passwords do not match.");
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 3000);
      return;
    }
    if (!agreeToTerms) {
      setSnackbarMessage("You must agree to the terms and conditions.");
      setShowSnackbar(true);
      setTimeout(() => setShowSnackbar(false), 3000);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Successfully created user:", userCredential.user);
        setSnackbarMessage("Successfully created user with email and password.");
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);
        // Clear the input fields
        setName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setRepeatPassword('');
        setAgreeToTerms(false);
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Successfully logged in:", userCredential.user);
        navigate('/news');
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        setSnackbarMessage("Error logging in: " + error.message);
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);
      });
  };

  const handleSocialLogin = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Successfully logged in with social provider:", result.user);
        navigate('/news');
      })
      .catch((error) => {
        console.error("Error logging in with social provider:", error.message);
        setSnackbarMessage("Error logging in with social provider: " + error.message);
        setShowSnackbar(true);
        setTimeout(() => setShowSnackbar(false), 3000);
      });
  };

  return (
    <div className='security-container'>
      {predefinedPositions.map((pos, index) => (
        <Circle key={index} top={pos.top} left={pos.left} color={colors[index % colors.length]} />
      ))}
      <Navbar />
      <div className='security-content'>
        <div className='security-left'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa natus praesentium facilis ullam dolor, assumenda neque dignissimos consectetur. In repellat quaerat ducimus facere eaque. Asperiores labore culpa magnam id temporibus obcaecati ipsa aliquid, harum, quibusdam maxime animi eligendi fuga. Enim, ipsa porro explicabo qui vero similique impedit harum sunt corrupti cum eveniet blanditiis voluptas nulla rerum est quasi fugit quae veritatis assumenda suscipit, aspernatur optio voluptatibus molestiae. Odit ex exercitationem nemo, repellendus ea unde nisi illo maxime! Est cum eum molestiae, molestias debitis at nihil, incidunt earum magni blanditiis ad reprehenderit maiores? Hic aliquam, aspernatur labore at alias assumenda expedita.
          <div className='btn-container'>
            <button className={activeTab === 'login' ? 'tab active' : 'tab'} onClick={() => handleTabClick('login')}>Login</button>
            <button className={activeTab === 'register' ? 'tab active' : 'tab'} onClick={() => handleTabClick('register')}>Register</button>
          </div>
          <div className='text-center my-3'>
            <p>Sign in using</p>
            <button className='social-btn' onClick={() => handleSocialLogin(googleProvider)}><FaGoogle /></button>
            <button className='social-btn' onClick={() => handleSocialLogin(facebookProvider)}><FaFacebook /></button>
            <button className='social-btn' onClick={() => handleSocialLogin(twitterProvider)}><FaTwitter /></button>
            <button className='social-btn' onClick={() => handleSocialLogin(githubProvider)}><FaGithub /></button>
          </div>
        </div>
        <div className='security-right'>
          {activeTab === 'login' && (
            <form onSubmit={handleLogin}>
              <div className="wrap-input-1"><input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
              <div className="wrap-input-1"><input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
              <div className='options'>
                <div className="wrap-check-51"><input id="cbx-51" type="checkbox" defaultChecked /><label className="cbx" htmlFor="cbx-51"></label><label className="lbl" htmlFor="cbx-50">Remember me</label></div>
                <p><Link to="/forgot-password" className='forgot'>Forgot password?</Link></p>
              </div>
              <button type='submit' className='login-btn'>Login</button>
              <div className='text-center'>
                <p>Not a member? <a href='#!' className='register' onClick={() => handleTabClick('register')}>Register</a></p>
              </div>
            </form>
          )}
          {activeTab === 'register' && (
            <form onSubmit={handleRegister}>
              <div className="wrap-input-1"><input className="input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /></div>
              <div className="wrap-input-1"><input className="input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /></div>
              <div className="wrap-input-1"><input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
              <div className="wrap-input-1"><input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
              <div className="wrap-input-1"><input className="input" type="password" placeholder="Repeat Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} /></div>
              <div className="wrap-check-51"><input id="cbx-52" type="checkbox" checked={agreeToTerms} onChange={() => setAgreeToTerms(!agreeToTerms)} /><label className="cbx" htmlFor="cbx-52"></label><label className="lbl" htmlFor="cbx-52">I have read and agreed to the terms and conditions.</label></div>
              <button className="register-btn" type='submit'><span className="text">Register</span></button>
            </form>
          )}
        </div>
      </div>
      <Snackbar message={snackbarMessage} show={showSnackbar} />
    </div>
  );
};

export default Security;
