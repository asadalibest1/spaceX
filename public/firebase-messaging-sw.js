importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');


const firebaseConfig = {
  apiKey: "AIzaSyDMIoMBiPZ76Lq9rUtf0Go6mF6P3FZVF6k",
    authDomain: "first-pwa-91847.firebaseapp.com",
    databaseURL: "https://first-pwa-91847.firebaseio.com",
    projectId: "first-pwa-91847",
    storageBucket: "first-pwa-91847.appspot.com",
    messagingSenderId: "80834917576",
    appId: "1:80834917576:web:3053c483257b2f29e1a1fd"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();