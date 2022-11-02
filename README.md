# How to use and deploy this clone-app ------------------------------
1st Create a new project at Firebase webapp
2nd Copy and paste Firebase SDK snippet Config
3rd Create "firebase.js" at /src directory and write:

//* -----------------------------------------------------------------
// firebase.js :
// TODO: Add SDKs for Firebase products that you want to use
// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    the actual content of the copied object (Firebase SDK snippet Config)
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

//* -----------------------------------------------------------------
4th Run $npm install

# DEPLOYMENT? -------------------------------------------------------
=> 1st run $npm run build
=> 2nd run $firebase login
=> 3rd run $firebase init
=> 4th run $firebase deploy