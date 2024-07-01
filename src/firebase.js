// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3X6MMVsvdgqUyUOPgspB2VIafcVRXEHE",
  authDomain: "text-utils-4a540.firebaseapp.com",
  projectId: "text-utils-4a540",
  storageBucket: "text-utils-4a540.appspot.com",
  messagingSenderId: "346688685528",
  appId: "1:346688685528:web:2274c959c43535717c5ead",
  measurementId: "G-6FC2YZJWL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);