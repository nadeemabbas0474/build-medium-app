// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn7g01SLr2ynuIW4R9d3V0erX5IPa5ar4",
  authDomain: "build-medium-clone.firebaseapp.com",
  projectId: "build-medium-clone",
  storageBucket: "build-medium-clone.appspot.com",
  messagingSenderId: "632293335988",
  appId: "1:632293335988:web:90d2090985b9b1a75908e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db}