// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS3tHm9EkUP6a7DG4U41Xd9WKw5h8ONjY",
  authDomain: "project11-ab306.firebaseapp.com",
  projectId: "project11-ab306",
  storageBucket: "project11-ab306.appspot.com",
  messagingSenderId: "462823645404",
  appId: "1:462823645404:web:9de03a6ef0877b07bd1419",
  measurementId: "G-797536LM77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, db, analytics, auth, signInWithEmailAndPassword,
createUserWithEmailAndPassword, fetchSignInMethodsForEmail, doc, setDoc, getDoc, getDocs, query, where, collection};
