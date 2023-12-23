// initializeApp from firebase and getFirestore from firebase/firestore.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFXRb3KXUyznOd-HRoXuKrNDSKxDsETUQ",
  authDomain: "habit-tracker-d0cd2.firebaseapp.com",
  projectId: "habit-tracker-d0cd2",
  storageBucket: "habit-tracker-d0cd2.appspot.com",
  messagingSenderId: "730125785179",
  appId: "1:730125785179:web:207ca76a6bed9d3e75077e",
  measurementId: "G-QKYJYTPP2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};