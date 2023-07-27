import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANRNLvVQheem1NI5ucakYMjXnTptWni4E",
  authDomain: "testing-944b3.firebaseapp.com",
  databaseURL: "https://testing-944b3-default-rtdb.firebaseio.com",
  projectId: "testing-944b3",
  storageBucket: "testing-944b3.appspot.com",
  messagingSenderId: "551254079257",
  appId: "1:551254079257:web:05feb934fe97ac1042f788"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
