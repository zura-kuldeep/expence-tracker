// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn5zo9S3XvQVSchf6QxCiLbX-4q2gH9FE",
  authDomain: "track-2k23.firebaseapp.com",
  projectId: "track-2k23",
  storageBucket: "track-2k23.appspot.com",
  messagingSenderId: "1014335961474",
  appId: "1:1014335961474:web:c4ddad54282005c041f79b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}