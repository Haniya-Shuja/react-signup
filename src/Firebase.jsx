// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCYw2_k9pKzDMyvYsvA1IgeDTg_srRL68",
  authDomain: "authentication-5090c.firebaseapp.com",
  projectId: "authentication-5090c",
  storageBucket: "authentication-5090c.appspot.com",
  messagingSenderId: "801215103550",
  appId: "1:801215103550:web:489d1e98e34f5b1ff4c76f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth (app)

export{auth}
