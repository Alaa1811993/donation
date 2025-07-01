// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyCSnCLMclU5hvttATzTxrNzKqRkyT9rljo",
  authDomain: "donationproject-2ab03.firebaseapp.com",
  projectId: "donationproject-2ab03",
  storageBucket: "donationproject-2ab03.firebasestorage.app",
  messagingSenderId: "841674594744",
  appId: "1:841674594744:web:3db6eca5ded23efb5a174d",
  measurementId: "G-CME8XLZ71W",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
