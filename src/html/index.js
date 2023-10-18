import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com.firebasejs/10.5.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyA57Y9GMVClVNOc5A9edzNLYFH4IWTbwik",
    authDomain: "travelconnect-3b2b5.firebaseapp.com",
    databaseURL: "https://travelconnect-3b2b5-default-rtdb.firebaseio.com",
    projectId: "travelconnect-3b2b5",
    storageBucket: "travelconnect-3b2b5.appspot.com",
    messagingSenderId: "126884481130",
    appId: "1:126884481130:web:e87a13033cb7f062a3e213"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase();