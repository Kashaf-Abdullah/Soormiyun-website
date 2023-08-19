import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQhJpixwsnw1eMdbZIWGa4mjQYZqn4Tgg",
  authDomain: "soormiyun-web-work.firebaseapp.com",
  projectId: "soormiyun-web-work",
  storageBucket: "soormiyun-web-work.appspot.com",
  messagingSenderId: "422680835119",
  appId: "1:422680835119:web:6da914b0bc5ab9149402da"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };