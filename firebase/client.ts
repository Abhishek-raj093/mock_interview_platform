// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU6DTpNsyqGEOVBcfW4JxbC04ckEoAP6M",
  authDomain: "prepwise-4e50f.firebaseapp.com",
  projectId: "prepwise-4e50f",
  storageBucket: "prepwise-4e50f.firebasestorage.app",
  messagingSenderId: "418041227541",
  appId: "1:418041227541:web:5c6ab6151bf389869aa11c",
  measurementId: "G-R9E61DPYZ6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);