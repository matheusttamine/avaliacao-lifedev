import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyABwC5YC7lSaonm8Fv_j-_A8kzhTWOktxo",
  authDomain: "lifedev-tamine.firebaseapp.com",
  projectId: "lifedev-tamine",
  storageBucket: "lifedev-tamine.firebasestorage.app",
  messagingSenderId: "377294551106",
  appId: "1:377294551106:web:3def0e45caa498048395db",
  measurementId: "G-3W6Y86WR9X"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
