import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq-q05SOTxxFco6OF2BW0cvzg7vrPihKU",
  authDomain: "project-71-b09a3.firebaseapp.com",
  projectId: "project-71-b09a3",
  storageBucket: "project-71-b09a3.appspot.com",
  messagingSenderId: "1021388872877",
  appId: "1:1021388872877:web:6567a97aeb3fc742d4fa24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
