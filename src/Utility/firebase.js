import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-IQDPQrWwtapk60VSoSCuh7vEBWQrJgQ",
  authDomain: "clone-38286.firebaseapp.com",
  projectId: "clone-38286",
  storageBucket: "clone-38286.appspot.com",
  messagingSenderId: "947908360353",
  appId: "1:947908360353:web:314e96ac93efd7ac72d8e0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
