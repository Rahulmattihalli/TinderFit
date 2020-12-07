import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBM0tDI10adYIqa2su828PqfAnIRYSLw1Q",
    authDomain: "fittinder-32902.firebaseapp.com",
    projectId: "fittinder-32902",
    storageBucket: "fittinder-32902.appspot.com",
    messagingSenderId: "373810957954",
    appId: "1:373810957954:web:5df8ad1871a46c8f4b2e9b",
    measurementId: "G-YWXXLSCEV3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;