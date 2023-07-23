// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaWUbs5FhKmqpugncevxFfrcDiQ7fhA1U",
  authDomain: "react-auth-7e8f0.firebaseapp.com",
  projectId: "react-auth-7e8f0",
  storageBucket: "react-auth-7e8f0.appspot.com",
  messagingSenderId: "959198724135",
  appId: "1:959198724135:web:07741003a468801321ce02",
  measurementId: "G-VTPWMNLZ7E",
};

// Initialize Firebasem run dev

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
let db = firebase.firestore();
export { db };
