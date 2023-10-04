import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAhP8X5W9kNeCkMKtXffRWZPNzPHTBFyQ8",
    authDomain: "turnero-277b9.firebaseapp.com",
    projectId: "turnero-277b9",
    storageBucket: "turnero-277b9.appspot.com",
    messagingSenderId: "377748608261",
    appId: "1:377748608261:web:a6f183e5d02660dbd4936c",
    measurementId: "G-VF94XVWP46"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

