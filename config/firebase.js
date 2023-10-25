// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore }from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const serviceAccount = require('../serviceAccountKey.json');
const admin = require('firebase-admin');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXTNv-aEgortrIRRt6DUjVFmr8ab0o4EQ",
  authDomain: "file-upload-system-to-firebase.firebaseapp.com",
  projectId: "file-upload-system-to-firebase",
  storageBucket: "file-upload-system-to-firebase.appspot.com",
  messagingSenderId: "71416680916",
  appId: "1:71416680916:web:88581436a335b787a28641",
  measurementId: "G-RE1F8QEH6H",
  storageBucket: "gs://file-upload-system-to-firebase.appspot.com",
  credential: admin.credential.cert(serviceAccount),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);