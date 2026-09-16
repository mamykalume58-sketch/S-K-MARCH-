import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY-UZX7zRz-mP4F0VMNTPwW6nFFeaZdUg",
  authDomain: "sk-marche-katanga.firebaseapp.com",
  projectId: "sk-marche-katanga",
  storageBucket: "sk-marche-katanga.firebasestorage.app",
  messagingSenderId: "993068861502",
  appId: "1:993068861502:web:0b9e16c0cce16d597f696f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
