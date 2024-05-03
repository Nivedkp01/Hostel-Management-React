import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDeo58-x1JlEIHl3lIK9o7yRqBF0LnCUA0",
    authDomain: "mhproject-77967.firebaseapp.com",
    projectId: "mhproject-77967",
    storageBucket: "mhproject-77967.appspot.com",
    messagingSenderId: "58508125372",
    appId: "1:58508125372:web:54813e001ab630efc6dcb9",
    measurementId: "G-J81F4ZZXGB"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  
  export { db, firebaseApp, auth };