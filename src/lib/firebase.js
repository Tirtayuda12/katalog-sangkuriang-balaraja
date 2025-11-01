// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkjDlM3BDWjsC0VT8e12rS_dvfbcmYMsg",
  authDomain: "sangkuriang-balaraja-1efd7.firebaseapp.com",
  projectId: "sangkuriang-balaraja-1efd7",
  storageBucket: "sangkuriang-balaraja-1efd7.firebasestorage.app",
  messagingSenderId: "23541604921",
  appId: "1:23541604921:web:9d6f04a11cc1d1004ce3e8",
  measurementId: "G-20YY1Q1TM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);