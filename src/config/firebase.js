import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAOWtCgoPHTC498W7VU_XQFWbBIe540LLQ",
  authDomain: "viralidate-13e3f.firebaseapp.com",
  projectId: "viralidate-13e3f",
  storageBucket: "viralidate-13e3f.appspot.com",
  messagingSenderId: "1042269673025",
  appId: "1:1042269673025:web:8757403067636bbb9518c0",
  measurementId: "G-22Z4S5GY63"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);