import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6WfinXgUWm8JcNhtE4aFaMR4ld8p4wG0",
  authDomain: "learn-lingo-8a28e.firebaseapp.com",
  projectId: "learn-lingo-8a28e",
  storageBucket: "learn-lingo-8a28e.firebasestorage.app",
  messagingSenderId: "273826705593",
  appId: "1:273826705593:web:fcb9d3b3d0dec7b76e6b68",
  measurementId: "G-P3Q2L4186N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
