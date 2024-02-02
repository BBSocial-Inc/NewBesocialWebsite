// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase config here
  apiKey: "AIzaSyAl7yYj3yPjnWUTVTZyUKT1w-T8zNj44-o",
  authDomain: "dash-5a9ee.firebaseapp.com",
  projectId: "dash-5a9ee",
  storageBucket: "dash-5a9ee.appspot.com",
  messagingSenderId: "6163332080",
  appId: "1:6163332080:web:147ac4844712cd030b7b35",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
