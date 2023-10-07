import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBI2yJ4BhBn545qJdToWaE4FC4cmm7DDoc",
    authDomain: "openinapp-assignment-2cc5e.firebaseapp.com",
    databaseURL: "https://openinapp-assignment-2cc5e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "openinapp-assignment-2cc5e",
    storageBucket: "openinapp-assignment-2cc5e.appspot.com",
    messagingSenderId: "440922337527",
    appId: "1:440922337527:web:61c526a61b7c57b01de3f2",
    measurementId: "G-MMCS338ZDW"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
