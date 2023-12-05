// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);