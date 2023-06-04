import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdnzsTxmsFghEU2CO7VeMUs28D6NzR3KI",
  authDomain: "get-xssed.firebaseapp.com",
  projectId: "get-xssed",
  storageBucket: "get-xssed.appspot.com",
  messagingSenderId: "89593791140",
  appId: "1:89593791140:web:40226fe51e0d8e1d1cdc31",
  measurementId: "G-F662BHD5Y8"
};
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };