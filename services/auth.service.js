import firebase from '../config/firebase.config';
import 'firebase/auth';

export const FBService = {
  signUp: async (email, password) => await firebase.auth().createUserWithEmailAndPassword(email, password),
  signIn: async (email, password) => await firebase.auth().signInWithEmailAndPassword(email, password),
  signOut: async () => await firebase.auth().signOut(),
};
