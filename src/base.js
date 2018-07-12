import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD77r211JCKWpjmzJGZ0UqmEHu4qyKWRxQ",
  authDomain: "catch-of-the-day-fran-rom.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-fran-rom.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
