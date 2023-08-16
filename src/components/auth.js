import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa2kRddyc6KQ7B8LctkAWyPXr1vs6Myo4",
  authDomain: "soormiyun-web.firebaseapp.com",
  projectId: "soormiyun-web",
  storageBucket: "soormiyun-web.appspot.com",
  messagingSenderId: "1025134129846",
  appId: "1:1025134129846:web:d6dcf3134cd3c0f0c72c17"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };