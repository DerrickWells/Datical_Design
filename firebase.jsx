// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHAjOUhXBPfF-JwK1FnmJG8aKEYCEFsLQ",
  authDomain: "datical-design-e4d2b.firebaseapp.com",
  projectId: "datical-design-e4d2b",
  storageBucket: "datical-design-e4d2b.firebasestorage.app",
  messagingSenderId: "387487463711",
  appId: "1:387487463711:web:cd5460d156a5910036582a",
  measurementId: "G-WDHNM2XRZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);