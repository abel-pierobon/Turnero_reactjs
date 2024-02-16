import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAcD6jRjNRc76QqtaVt7X2xpdcDxZMmuzs",
    authDomain: "turnero-dc6a0.firebaseapp.com",
    databaseURL: "https://turnero-dc6a0-default-rtdb.firebaseio.com",
    projectId: "turnero-dc6a0",
    storageBucket: "turnero-dc6a0.appspot.com",
    messagingSenderId: "349758838710",
    appId: "1:349758838710:web:625cf07368df932d0c5317"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

