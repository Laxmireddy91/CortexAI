import { initializeApp } from "firebase/app";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cortexai-a0560.firebaseapp.com",
  projectId: "cortexai-a0560",
  storageBucket: "cortexai-a0560.firebasestorage.app",
  messagingSenderId: "1057304133510",
  appId: "1:1057304133510:web:d04799ee843177f723f607",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };