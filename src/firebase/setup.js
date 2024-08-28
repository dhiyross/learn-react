import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqpvliW800SrhlK1mbWbNJ6bvg1h8krco",
    authDomain: "clone-news-531c7.firebaseapp.com",
    projectId: "clone-news-531c7",
    storageBucket: "clone-news-531c7.appspot.com",
    messagingSenderId: "263714604392",
    appId: "1:263714604392:web:bce62ea9fe964c6c2742dd",
    measurementId: "G-6V7Q6D9H5Y"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();