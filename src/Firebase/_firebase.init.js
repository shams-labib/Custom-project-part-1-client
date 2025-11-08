// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ8O-v_-62WEY_cXYbIqb7-36z-q0LW7c",
  authDomain: "custom-project-part-1.firebaseapp.com",
  projectId: "custom-project-part-1",
  storageBucket: "custom-project-part-1.firebasestorage.app",
  messagingSenderId: "644077650777",
  appId: "1:644077650777:web:0acb2ae8eb4a690f55c248",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
