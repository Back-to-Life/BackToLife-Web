import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyCY0C4IU-bH_6fz7GzwB9LRzjGhTiSyGV0",
    authDomain: "web-quickstart-57003.firebaseapp.com",
    databaseURL: "https://web-quickstart-57003.firebaseio.com",
    projectId: "web-quickstart-57003",
    storageBucket: "web-quickstart-57003.appspot.com",
    messagingSenderId: "561349282719",
    appId: "1:561349282719:web:bd3625e2950086a5c60baa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  export{
      storage,firebase as default
  }