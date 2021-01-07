import firebase from 'firebase'

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

export default function firebaseService(){
const messaging = firebase.messaging();
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
  
    })
}