// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore, getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMfI5B7dn6fRdMaE298Wsmupf52Rlwo5c",
    authDomain: "braided-gist-309113.firebaseapp.com",
    projectId: "braided-gist-309113",
    storageBucket: "braided-gist-309113.appspot.com",
    messagingSenderId: "778719679707",
    appId: "1:778719679707:web:773bd2d3227089001028fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };