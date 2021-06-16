import firebase from 'firebase';
import {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} from '../../keys.json';

// Use your config values here.
firebase.initializeApp({
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
});

firebase.analytics();
