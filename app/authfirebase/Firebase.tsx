// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrUXqEgL0nfUqtkHJMFmyStyHBEIRLe1A",
  authDomain: "officia0033.firebaseapp.com",
  databaseURL: "https://officia0033-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "officia0033",
  storageBucket: "officia0033.appspot.com",
  messagingSenderId: "347062432641",
  appId: "1:347062432641:web:115f2f053b6bdf7e3cae80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };