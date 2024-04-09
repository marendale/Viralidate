// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOWtCgoPHTC498W7VU_XQFWbBIe540LLQ",
  authDomain: "viralidate-13e3f.firebaseapp.com",
  projectId: "viralidate-13e3f",
  storageBucket: "viralidate-13e3f.appspot.com",
  messagingSenderId: "1042269673025",
  appId: "1:1042269673025:web:8757403067636bbb9518c0",
  measurementId: "G-22Z4S5GY63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

if (process.env.NODE_ENV === 'development') {
  connectFunctionsEmulator(getFunctions(app), "localhost", 5001)
}