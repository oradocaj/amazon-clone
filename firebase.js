// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACRYsV1r86roC3yUUo8IFflpMww6UtUjI",
  authDomain: "clone-5da47.firebaseapp.com",
  projectId: "clone-5da47",
  storageBucket: "clone-5da47.appspot.com",
  messagingSenderId: "838623853119",
  appId: "1:838623853119:web:97e730dc517af1e233568a"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
