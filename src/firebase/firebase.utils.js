import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
  apiKey: "AIzaSyA1scdShfxdHduELdYPBLQJWPOdheT20pk",
  authDomain: "crwn-db-aabd6.firebaseapp.com",
  databaseURL: "https://crwn-db-aabd6.firebaseio.com",
  projectId: "crwn-db-aabd6",
  storageBucket: "crwn-db-aabd6.appspot.com",
  messagingSenderId: "69724944306",
  appId: "1:69724944306:web:a772d0bee57b704c9056ab",
  measurementId: "G-3BKEESKWJZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

