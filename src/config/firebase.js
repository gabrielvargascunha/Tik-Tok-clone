
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2T3xqkTQBpZ4Nfve1_KfddcgI6LHGno8",
  authDomain: "tiktok-b8381.firebaseapp.com",
  projectId: "tiktok-b8381",
  storageBucket: "tiktok-b8381.appspot.com",
  messagingSenderId: "405682299488",
  appId: "1:405682299488:web:a581eff3f2f1d37c651905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);


export default db;