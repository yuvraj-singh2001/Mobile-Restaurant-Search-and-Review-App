import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCi59-vn9F516xwt68Xe13xRDfydpzNVSg",
    authDomain: "meals-to-go-b7ead.firebaseapp.com",
    projectId: "meals-to-go-b7ead",
    storageBucket: "meals-to-go-b7ead.appspot.com",
    messagingSenderId: "642521698540",
    appId: "1:642521698540:web:8c753aa0c743d50afc15c9",
    measurementId: "G-92KMDZZKK2"
  };

let app;

if(!firebase.apps.length){
  app = firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}

const auth = firebase.auth();
export {auth};