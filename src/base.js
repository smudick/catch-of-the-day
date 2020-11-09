import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB7JgOHv0v0VZ-yFd3aW78K-DOVaA51K5Y",
  authDomain: "catch-of-the-day--sm.firebaseapp.com",
  databaseURL: "https://catch-of-the-day--sm.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;