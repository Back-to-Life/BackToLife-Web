import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBgnpMpFuTY0PNaVfLo1hS4Z2Ixks5IxJY",
    authDomain: "backtolife-recycling.firebaseapp.com",
    projectId: "backtolife-recycling",
    storageBucket: "backtolife-recycling.appspot.com",
    messagingSenderId: "254434159177",
    appId: "1:254434159177:web:33e35fa17ec9afc3d06d98",
    measurementId: "G-3DBEFRRNP3"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  export{
      storage,firebase as default
  }