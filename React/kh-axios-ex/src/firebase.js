import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPForgRK2oU_jpDNYzGp-E00iRAHxIHlY",
  authDomain: "photo-island-6459e.firebaseapp.com",
  projectId: "photo-island-6459e",
  storageBucket: "photo-island-6459e.appspot.com",
  messagingSenderId: "583346064149",
  appId: "1:583346064149:web:312f87be90bd4b708eb71c",
  measurementId: "G-DJMV28WD5L",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
