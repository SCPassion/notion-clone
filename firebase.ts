// npm install firebase
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAB1-oMWRUFc4pFR1PV5s0gssvTYDkXSN8",
  authDomain: "notion-clone-91327.firebaseapp.com",
  projectId: "notion-clone-91327",
  storageBucket: "notion-clone-91327.firebasestorage.app",
  messagingSenderId: "297129438260",
  appId: "1:297129438260:web:0dd1ed166fed791bddae61",
};

// Build a connection between our nextjs app and firestore database
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
export { db };
