import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mycart-83b6d.firebaseapp.com",
  projectId: "mycart-83b6d",
  storageBucket: "mycart-83b6d.firebasestorage.app",
  messagingSenderId: "150722284802",
  appId: "1:150722284802:web:43cd91b370862f980b861b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};