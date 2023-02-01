import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpYbXkQarEFvu6IhLQkFAKoc3GvSz1yPc",
  authDomain: "shoplygamer.firebaseapp.com",
  projectId: "shoplygamer",
  storageBucket: "shoplygamer.appspot.com",
  messagingSenderId: "234498361540",
  appId: "1:234498361540:web:9628d0cd4b5db359f72191",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
