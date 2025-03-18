
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDknYkhHy4r6vYdUZfl1clwZbF_e7TMeOE",
  authDomain: "fin-vue.firebaseapp.com",
  projectId: "fin-vue",
  storageBucket: "fin-vue.appspot.com",
  messagingSenderId: "752839694493",
  appId: "1:752839694493:web:edc1124b22d19ad2aa5c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
// Create a root reference
const storage = getStorage();

export { fireDB, auth, storage }