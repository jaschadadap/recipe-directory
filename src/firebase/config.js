import firebase from 'firebase/app'
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyBxqePsdXwuniobbBdNNrnWIp5w79Ckt5w",
    authDomain: "cooking-ninja-site-28778.firebaseapp.com",
    projectId: "cooking-ninja-site-28778",
    storageBucket: "cooking-ninja-site-28778.appspot.com",
    messagingSenderId: "318992856258",
    appId: "1:318992856258:web:a8140189dab3e7df94f75b"
  }

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }