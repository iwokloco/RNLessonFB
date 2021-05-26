import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDH_e2Oob8QLfSMtdqrUu5sYiuIjcYh55I',
  authDomain: 'comics-e115a.firebaseapp.com',
  projectId: 'comics-e115a',
  storageBucket: 'comics-e115a.appspot.com',
  messagingSenderId: '1045627424278',
  appId: '1:1045627424278:web:f6ad023f4ad68d0743ef37',
  measurementId: 'G-RG4TWRJ24T',
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
