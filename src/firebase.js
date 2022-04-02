// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM7cZ_NsCxhPNrFJhuU8FbFNSAAwqtIlA",
  authDomain: "beauty-prism.firebaseapp.com",
  projectId: "beauty-prism",
  storageBucket: "beauty-prism.appspot.com",
  messagingSenderId: "272190861500",
  appId: "1:272190861500:web:9ff81b9d8c41a56e6960b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;