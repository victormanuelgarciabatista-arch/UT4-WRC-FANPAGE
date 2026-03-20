
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCind_fy35pkdsuR4UvBHoCCdX-3fsYBwY",
  authDomain: "base-de-datos-wrc.firebaseapp.com",
  databaseURL: "https://base-de-datos-wrc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "base-de-datos-wrc",
  storageBucket: "base-de-datos-wrc.firebasestorage.app",
  messagingSenderId: "157264750443",
  appId: "1:157264750443:web:55dee8762d8dedd9f6ce2e",
  measurementId: "G-4H0JPEGPBF"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getDatabase } from "firebase/database";
export const db = getDatabase(app);

import { getAuth } from "firebase/auth";
export const auth = getAuth(app);

import { getStorage } from "firebase/storage";
export const storage = getStorage(app);