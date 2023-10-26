import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBbB79ZJreq9Su4_BS4TOoh5gF8Y70wwi8",
    authDomain: "turneronuevo.firebaseapp.com",
    projectId: "turneronuevo",
    storageBucket: "turneronuevo.appspot.com",
    messagingSenderId: "107777531381",
    appId: "1:107777531381:web:2c7f9f99db837cb4d8d4bc",
    measurementId: "G-0W8N7V102W"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

