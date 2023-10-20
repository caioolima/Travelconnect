import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { database } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQYiq4oK9RgE89xssd4m4LvHwE-7ZwwqY",
    authDomain: "signup-form-322a5.firebaseapp.com",
    projectId: "signup-form-322a5",
    storageBucket: "signup-form-322a5.appspot.com",
    messagingSenderId: "966162306492",
    appId: "1:966162306492:web:c7d06eaab8800056ad87b9"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const postForm = document.getElementById("postForm");
const feed = document.querySelector(".feed");

postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const postTitle = document.getElementById("postTitle").value;
    const postContent = document.getElementById("postContent").value;
    const postImage = document.getElementById("postImage").value;

    // Adicione a lógica para adicionar a postagem ao Firebase aqui

    // Limpe o formulário
    postForm.reset();
});

// Função para atualizar o feed
function atualizarFeed() {
    feed.innerHTML = ""; // Limpe o feed
    // Adicione a lógica para recuperar as postagens do Firebase e exibi-las aqui
}

// Chame a função para atualizar o feed quando a página carregar
atualizarFeed();