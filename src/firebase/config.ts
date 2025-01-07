// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhlIwGQN6a7G7OMpcn7vWfGBagBrmaFuI",
  authDomain: "astro-authentication-ff249.firebaseapp.com",
  projectId: "astro-authentication-ff249",
  storageBucket: "astro-authentication-ff249.firebasestorage.app",
  messagingSenderId: "822188568338",
  appId: "1:822188568338:web:9f208e3e84eb5e90044dcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

auth.languageCode = "es"; //para forzar la parte de local para que sea en español

export const firebase = {
  app,
  auth,
};
