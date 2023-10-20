// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

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
const database = getDatabase(app);

window.signup = async function (e) {
  e.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var username = document.getElementById('username').value;
  var phone = document.getElementById('phone').value;

  // Verificar correspondência de senhas
  if (password !== confirmPassword) {
    alert('As senhas não coincidem.');
    return;
  }

  // Criar o usuário no Firebase
  createUserWithEmailAndPassword(auth, email, password, username, phone)
    .then(function (success) {
      alert('Cadastro realizado com sucesso.');
    })
    .catch(function (err) {
      // Trate erros específicos do Firebase Auth
      if (err.code === "auth/email-already-in-use") {
        alert('Erro: Este e-mail já está cadastrado. Por favor, use outro endereço de e-mail.');
      } else {
        alert('Erro: ' + err.message); // Lidar com outros erros
      }
    });
};

