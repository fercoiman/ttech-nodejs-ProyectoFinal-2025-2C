// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { configDotenv } from "dotenv";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 
  authDomain: "entregafinal-8e4a9.firebaseapp.com",
  projectId: "entregafinal-8e4a9",
  storageBucket: "entregafinal-8e4a9.firebasestorage.app",
  messagingSenderId: "584130145148",
  appId: "1:584130145148:web:29f0cdd1daec04770d52f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
