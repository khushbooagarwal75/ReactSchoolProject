
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore,serverTimestamp} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBbzXwxOsZw6p_qv8E5Whtq0lihvWpJM5o",
  authDomain: "login-7d923.firebaseapp.com",
  projectId: "login-7d923",
  storageBucket: "login-7d923.appspot.com",
  messagingSenderId: "875378237701",
  appId: "1:875378237701:web:164f71c8da225ced2a576c",
  measurementId: "G-3G32CP6VYB"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();
const firestore = getFirestore(app);

export {app,auth,firestore,serverTimestamp};


