// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDiAk40MTpBmHRb1Q3zJJw9M8kKCRnIeGU",
  authDomain: "reactlinks-91de2.firebaseapp.com",
  projectId: "reactlinks-91de2",
  storageBucket: "reactlinks-91de2.firebasestorage.app",
  messagingSenderId: "810543184375",
  appId: "1:810543184375:web:487ec59b92a704b0b556f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
