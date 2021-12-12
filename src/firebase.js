import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBCENcQf3JqOkjLqi9JmsWKf5RwluObJGw",
    authDomain: "disney-plus-clone-98d4f.firebaseapp.com",
    projectId: "disney-plus-clone-98d4f",
    storageBucket: "disney-plus-clone-98d4f.appspot.com",
    messagingSenderId: "693030920579",
    appId: "1:693030920579:web:387e670dc67492e9d8d6b6",
    measurementId: "G-LJDJDZM7NV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;