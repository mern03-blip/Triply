import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZ6_Nln4qQbNHM6apMOhDOktKVXbprocU",
  authDomain: "igo-app-9f1f0.firebaseapp.com",
  databaseURL: "https://igo-app-9f1f0-default-rtdb.firebaseio.com",
  projectId: "igo-app-9f1f0",
  storageBucket: "igo-app-9f1f0.appspot.com",
  messagingSenderId: "699882206471",
  appId: "1:699882206471:web:33ce70638cdfc2f036c1a2",
  measurementId: "G-VEL9KG8BNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and Firebase Authentication
const db = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Authentication
const storage = getStorage(app);

// Export auth and db to use in other parts of the app
export { auth, db, storage };
