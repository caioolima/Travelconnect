// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import{
    getAuth,
    signInWithEmailAndPassword,
}from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQYiq4oK9RgE89xssd4m4LvHwE-7ZwwqY",
  authDomain: "signup-form-322a5.firebaseapp.com",
  projectId: "signup-form-322a5",
  storageBucket: "signup-form-322a5.appspot.com",
  messagingSenderId: "966162306492",
  appId: "1:966162306492:web:c7d06eaab8800056ad87b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

window.login = async function(e) {
  e.preventDefault();
  
  var email = document.getElementById('email-login').value;
  var password = document.getElementById('password-login').value;
  
  // Fazer o login no Firebase
  signInWithEmailAndPassword(auth, email, password)
    .then(function(userCredential) {
      alert('Login bem-sucedido.');
      // Você pode redirecionar o usuário ou realizar outras ações aqui.
    })
    .catch(function(err) {
      // Trate erros específicos do Firebase Auth
      if (err.code === "auth/invalid-login-credentials") {
        alert('Erro: Usuário não encontrado. Verifique seu e-mail e senha.');
      } else {
        alert('Erro: ' + err.message); 
      }
    });
};
