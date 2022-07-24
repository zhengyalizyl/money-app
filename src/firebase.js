// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPmvYZJ_qHPeu2CRzfLanBzdJLtSMsLgo",
    authDomain: "qiuzhi99-money.firebaseapp.com",
    projectId: "qiuzhi99-money",
    storageBucket: "qiuzhi99-money.appspot.com",
    messagingSenderId: "240847466841",
    appId: "1:240847466841:web:8aa3a8216de89e6dc31c48"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
export { auth }