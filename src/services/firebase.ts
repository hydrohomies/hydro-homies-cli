/**
 * Service for implementing fireauth and store for tracking water usage
 */
import * as firebase from 'firebase'
// Set the configuration for your app
// TODO: Replace with your project's config object
let config = {
  apiKey: 'AIzaSyAm8-cIzAKdIUio00gbXNHrA_sYf3R1Oss',
  authDomain: 'hydro-homies-cli.firebaseapp.com',
  databaseURL: 'https://hydro-homies-cli.firebaseio.com',
  projectId: 'hydro-homies-cli',
  storageBucket: 'hydro-homies-cli.appspot.com',
  messagingSenderId: '538032111434',
  appId: '1:538032111434:web:f051ea36b2059dc1'
}
firebase.initializeApp(config)

// Get a reference to the database service
let database = firebase.database()
