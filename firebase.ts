// Import the functions you need from the SDKs you need
import { initializeApp ,getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZzmy1q9J1dWJiYuOwLk4KNVVpy-EweDE",
  authDomain: "netflix-clone-42492.firebaseapp.com",
  projectId: "netflix-clone-42492",
  storageBucket: "netflix-clone-42492.appspot.com",
  messagingSenderId: "331882822668",
  appId: "1:331882822668:web:cbc343c0ce817daf54c229",
  measurementId: "G-631T7G8H9R"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }