import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXkh9JKyRyXrc5sHEEKp6ti5md3Q4D24I",
  authDomain: "insideout-576ae.firebaseapp.com",
  projectId: "insideout-576ae",
  storageBucket: "insideout-576ae.appspot.com",
  messagingSenderId: "242751896251",
  appId: "1:242751896251:web:9dd76ae2f900aa3432c79e",
  measurementId: "G-V33B6FYE7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const database = getFirestore(app); 

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, sendPasswordResetEmail, database, googleProvider, facebookProvider, twitterProvider, githubProvider };