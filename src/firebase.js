import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCcUzLHWKBAGY2UfAF1dCDKacB4CeN6E3M",
    authDomain: "clone-1bb5c.firebaseapp.com",
    projectId: "clone-1bb5c",
    storageBucket: "clone-1bb5c.appspot.com",
    messagingSenderId: "824832555502",
    appId: "1:824832555502:web:f7e7b51ba214183cb2f6ff",
    measurementId: "G-JQE8KMLNKB"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }