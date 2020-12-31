import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAmnv9qj478IDVe8RIWs8S3HvgiJYrqTYQ",
  authDomain: "discord-redux-clone-18a1b.firebaseapp.com",
  projectId: "discord-redux-clone-18a1b",
  storageBucket: "discord-redux-clone-18a1b.appspot.com",
  messagingSenderId: "5519509974",
  appId: "1:5519509974:web:35527813b957999525fc77"
};

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }

export default db;