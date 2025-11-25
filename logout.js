// Firebase Configuration (same as in other files)
const firebaseConfig = {
    apiKey: "AIzaSyD8J_JdPVu8GbYQ2d4jxdoUHcMaW7dfLOo",
  authDomain: "tstmkm.firebaseapp.com",
  databaseURL: "https://tstmkm-default-rtdb.firebaseio.com",
  projectId: "tstmkm",
  storageBucket: "tstmkm.firebasestorage.app",
  messagingSenderId: "460458800429",
  appId: "1:460458800429:web:a8772f9a8cdad9920bcfa4",
  measurementId: "G-X3PTPXYS4E"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    const logoutMessageElement = document.getElementById('logout-message');

    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Firebase logout process
        auth.signOut().then(() => {
            logoutMessageElement.textContent = "You have successfully logged out.";
            // Redirect to login page or any other page
            setTimeout(() => {
                window.location.href = 'login.html'; // Redirect to login page after 2 seconds
            }, 2000);
        }).catch(error => {
            logoutMessageElement.textContent = "Error: " + error.message;
        });
    });
});
