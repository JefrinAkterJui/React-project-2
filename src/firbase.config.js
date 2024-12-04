// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF4ezkmAKq7fZUyCLPLoBMvWdq15clCI4",
  authDomain: "note-project-ab540.firebaseapp.com",
  projectId: "note-project-ab540",
  storageBucket: "note-project-ab540.firebasestorage.app",
  messagingSenderId: "169732460142",
  appId: "1:169732460142:web:cd2fab3fb471edfd17e07f",
  measurementId: "G-HHBHQ3D478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app