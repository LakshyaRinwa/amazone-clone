import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCw6cUSg673oFYjgVymaEKjKfLsyFZgFnM",
  authDomain: "e-clone15.firebaseapp.com",
  projectId: "e-clone15",
  storageBucket: "e-clone15.appspot.com",
  messagingSenderId: "431710433350",
  appId: "1:431710433350:web:ddf4a9b5b0a7ca841ada47",
  measurementId: "G-4PML6NSBWK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(firebaseApp);

export { auth };