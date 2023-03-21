
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBjlCEKmhpB8OPJUc_T_RZirExJpI7f0QQ",
  authDomain: "crud-firebase-3eb04.firebaseapp.com",
  projectId: "crud-firebase-3eb04",
  storageBucket: "crud-firebase-3eb04.appspot.com",
  messagingSenderId: "211902401413",
  appId: "1:211902401413:web:016d8aef76c75f98de52ec"
};

const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)