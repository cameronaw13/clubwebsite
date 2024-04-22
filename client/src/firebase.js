// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMD8L19Auz0qGQDMpFz3Tnbn2sQtxPVFo",
  authDomain: "coc-acm-tech-club-website.firebaseapp.com",
  projectId: "coc-acm-tech-club-website",
  storageBucket: "coc-acm-tech-club-website.appspot.com",
  messagingSenderId: "811725375818",
  appId: "1:811725375818:web:a245a9d0d10ff222d059b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app,
  {localCache:
    persistentLocalCache(/*settings*/{tabManager: persistentMultipleTabManager()})
  }
);