import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Constants } from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyBp91QIisoX9TyWwLoF5lM2n1uHzugfMT8",
  authDomain: "rnchatapp-90c30.firebaseapp.com",
  projectId: "rnchatapp-90c30",
  storageBucket: "rnchatapp-90c30.appspot.com",
  messagingSenderId: "263739315961",
  appId: "1:263739315961:web:cae9e985fcb27207fdb428",
};

initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
