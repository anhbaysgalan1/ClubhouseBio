import firebase from 'firebase';
// import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAuOGqD7s92uGR9UqT9PDVER3FKxq8zGaM",
    authDomain: "clubhouse-bio.firebaseapp.com",
    projectId: "clubhouse-bio",
    storageBucket: "clubhouse-bio.appspot.com",
    messagingSenderId: "45833908289",
    appId: "1:45833908289:web:5b17b49110476493e616c0"
  };

  try {
    firebase.initializeApp(firebaseConfig);
  } catch(err){
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)}
  }
  const fire = firebase;
  export default fire.firestore();