import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0lzb_tHutHVTrltcrpiPlDXX0IooD-zY",
  authDomain: "parcial-3-d958e.firebaseapp.com",
  projectId: "parcial-3-d958e",
  storageBucket: "parcial-3-d958e.firebasestorage.app",
  messagingSenderId: "116042689138",
  appId: "1:116042689138:web:1a1a0b5e004beaae7e70eb"
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();