// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdCcVu5D6RNBx-2BL8LVecwy-aBo8o8A0",
  authDomain: "otp-gen-8e6cb.firebaseapp.com",
  projectId: "otp-gen-8e6cb",
  storageBucket: "otp-gen-8e6cb.appspot.com",
  messagingSenderId: "761660121127",
  appId: "1:761660121127:web:458ba93d75d8f6f29d2e02",
  measurementId: "G-N8137STRM2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);