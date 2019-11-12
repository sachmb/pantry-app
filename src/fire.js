import firebase from 'firebase';
// import firestore from 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC5W991K0JoJwp-4t1V9VETSqgU54op5Ks",
  authDomain: "pantry-fire.firebaseapp.com",
  databaseURL: "https://pantry-fire.firebaseio.com",
  projectId: "pantry-fire",
  storageBucket: "pantry-fire.appspot.com",
  messagingSenderId: "456452524318",
  appId: "1:456452524318:web:b5eb6083de48c000c3210f",
  measurementId: "G-1TEWQ9FVCZ"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

// Initialize Firebase
// var fire = firebase.initializeApp(firebaseConfig);
// var firestore = firebase.firestore();
// export default {fire, firestore,};

export default firebase;