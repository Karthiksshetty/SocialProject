// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getFirestore
} from "firebase/firestore"
import {
  getStorage
} from "firebase/storage"
import {getAuth} from "firebase/auth"
import 'firebase/firestore';
// import firebase from 'firebase/app';
// import { db } from "firebase-config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_CCT_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_CCT_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_CCT_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_CCT_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_CCT_FIREBASE_MESSAGESENDERID,
  appId: import.meta.env.VITE_CCT_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_CCT_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db =getFirestore(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app);