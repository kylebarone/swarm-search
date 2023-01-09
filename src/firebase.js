// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7xDORyhR8YqTGP8t63rh9ipjwWu6Dq1E",
  authDomain: "swarm-search.firebaseapp.com",
  projectId: "swarm-search",
  storageBucket: "swarm-search.appspot.com",
  messagingSenderId: "465182945140",
  appId: "1:465182945140:web:e71e4d5d13719de9c3c621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);