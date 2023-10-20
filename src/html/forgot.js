// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQYiq4oK9RgE89xssd4m4LvHwE-7ZwwqY",
  authDomain: "signup-form-322a5.firebaseapp.com",
  projectId: "signup-form-322a5",
  storageBucket: "signup-form-322a5.appspot.com",
  messagingSenderId: "966162306492",
  appId: "1:966162306492:web:c7d06eaab8800056ad87b9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();


window.resetPassword = async function (e) {
  e.preventDefault();

  var email = document.getElementById('email-reset').value;

  // Envie o e-mail de redefinição de senha
  sendPasswordResetEmail(auth, email)
    .then(function () {
      alert('Você receberá um e-mail para redefinir sua senha se o e-mail informado foi localizado.');
    })
    .catch(function (err) {
      if (err.code === "auth/invalid-email") {
        alert('Erro: Endereço de e-mail inválido. Por favor, verifique seu o seu e-mail está correto.');
      } else {
        alert('Erro: ' + err.message);
      }
    });
};
