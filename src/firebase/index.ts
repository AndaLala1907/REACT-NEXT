import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlCyYRWxAg6opNf0wPDT_2zc3rx8qBDik",
  authDomain: "fitness-app-react-5.firebaseapp.com",
  projectId: "fitness-app-react-5",
  storageBucket: "fitness-app-react-5.appspot.com",
  messagingSenderId: "944622253607",
  appId: "1:944622253607:web:2e8d9748f9976a73930002",
  measurementId: "G-J45LVXXKT7"
};

export const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);
export const auth = getAuth(app);
