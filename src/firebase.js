// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMuxOTknLd5jCtNPlvvoMfVUOVOIb6HXE",
  authDomain: "dazzle-netflix.firebaseapp.com",
  projectId: "dazzle-netflix",
  storageBucket: "dazzle-netflix.appspot.com",
  messagingSenderId: "137352383405",
  appId: "1:137352383405:web:fdb97c4d10861d4a9b6f24",
  measurementId: "G-GC3YGP9SS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);