import firebase from 'firebase/app';
import 'firebase/storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID,STORAGE_BUCKET, SENDER_ID, APP_ID, MEASUREMENT_ID } from "../../enviroments";

 var firebaseConfig = {
     apiKey: `${API_KEY}`,
     authDomain: `${AUTH_DOMAIN}`,
     projectId: `${PROJECT_ID}`,
     storageBucket: `${STORAGE_BUCKET}`,
     messagingSenderId: `${SENDER_ID}`,
     appId: `${APP_ID}`,
     measurementId:`${MEASUREMENT_ID}` 
   };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  export{
      storage,firebase as default
  }