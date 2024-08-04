// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMjNZbQe3G0db9pkm2tW4EBHs50O0h2nQ",
  authDomain: "mern-auth-b1f16.firebaseapp.com",
  projectId: "mern-auth-b1f16",
  storageBucket: "mern-auth-b1f16.appspot.com",
  messagingSenderId: "1066560274348",
  appId: "1:1066560274348:web:afbd8153ce382340094409"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);