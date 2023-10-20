// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import {
    getAuth,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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

// Function to redirect to feed page
function redirectToFeedPage() {
    window.location.href = 'feed.html'; // Replace with the URL of your feed page
}

// Login function
window.login = async function (e) {
    e.preventDefault();

    var email = document.getElementById('email-login').value;
    var password = document.getElementById('password-login').value;

    // Log in with Firebase
    signInWithEmailAndPassword(auth, email, password)
        .then(function (userCredential) {
            alert('Login successful.');
            // Redirect the user to the feed page after login
            redirectToFeedPage();
        })
        .catch(function (err) {
            // Handle specific Firebase Auth errors
            if (err.code === "auth/invalid-login-credentials") {
                alert('Error: User not found. Check your email and password.');
            } else {
                alert('Error: ' + err.message);
            }
        });

};