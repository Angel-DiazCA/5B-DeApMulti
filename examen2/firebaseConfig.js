import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZERsfW3Y1lew-gO_p4lMYMfZ450vObVU",
  authDomain: "auth-4abf9.firebaseapp.com",
  projectId: "auth-4abf9",
  storageBucket: "auth-4abf9.appspot.com",
  messagingSenderId: "838608229867",
  appId: "1:838608229867:web:6f8f5f026217dbc36bf5ae",
  measurementId: "G-Z4RYN0016N"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
