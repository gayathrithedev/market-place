import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

const RNfirebaseConfig = {
  apiKey: '........',
  authDomain: 'note-app-rn.firebaseapp.com',
  projectId: 'note-app-rn',
  storageBucket: 'note-app-rn.appspot.com',
  messagingSenderId: '.....',
  appId: '......',
};

export const initializeFirebase = () => {
  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp({});
  } else {
    app = firebase.app();
  }
};

export const signUp = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const login = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Logged in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

export const logout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};
