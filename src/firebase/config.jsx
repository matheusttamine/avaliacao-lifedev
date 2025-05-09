import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyABwC5YC7lSaonm8Fv_j-_A8kzhTWOktxo",
    authDomain: "lifedev-tamine.firebaseapp.com",
    projectId: "lifedev-tamine",
    storageBucket: "lifedev-tamine.firebasestorage.app",
    messagingSenderId: "377294551106",
    appId: "1:377294551106:web:3def0e45caa4980483995db",
    measurementId: "G-3W6Y86WR9X"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }