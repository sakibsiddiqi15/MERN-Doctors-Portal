/**
 * Doctors Portal S15 (sakibsiddiqi15);
 */
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};
const firebaseApp = () => initializeApp(firebaseConfig);
export default firebaseApp;