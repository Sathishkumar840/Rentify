// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-c1d95.firebaseapp.com",
  projectId: "real-estate-c1d95",
  storageBucket: "real-estate-c1d95.appspot.com",
  messagingSenderId: "625628207543",
  appId: "1:625628207543:web:293d71653d57ef01ccb032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };

