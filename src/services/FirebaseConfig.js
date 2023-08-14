import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwMkrQPbwbeY5ZPOdaGRGIV0RNsRZ-oi8",
  authDomain: "comision-55185-cbda7.firebaseapp.com",
  projectId: "comision-55185-cbda7",
  storageBucket: "comision-55185-cbda7.appspot.com",
  messagingSenderId: "415543683456",
  appId: "1:415543683456:web:bb0a43131c5101d177f965",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
