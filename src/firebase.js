// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL_6Rj8vS1U_0fw7bzqdDHo8jP3DG-Aog",
    authDomain: "skill-counter.firebaseapp.com",
    projectId: "skill-counter",
    storageBucket: "skill-counter.appspot.com",
    messagingSenderId: "623409051404",
    appId: "1:623409051404:web:bf2a67a89eef2f1ee2fb29",
    measurementId: "G-78G24HHWYT",
    databaseURL: "https://skill-counter-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
