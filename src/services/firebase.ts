/**
 * Service for implementing fireauth and firestore for tracking water usage and facts
 */
import * as firebase from 'firebase'

import {apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId} from '../../config'
// Set the configuration for your app
// TODO: Replace with your project's config object
const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
}
firebase.initializeApp(config)

// Get a reference to the database service
let database = firebase.database()
let auth = firebase.auth()

export class Firebase {
  /**
   * If user is logged in, returns User Object
   * @returns User if logged in || null
   */
  get user() {
    // @ts-ignore
    if (auth.currentUser()) {
      // @ts-ignore
      return auth.currentUser()
    } else {
      return null
    }
  }

  /**
   * Creates new user using email and password
   * @param email User Email
   * @param password User Password
   * @returns Error Code
   */
  static createUserEmailPassword(email: string, password: string) {
    auth.createUserWithEmailAndPassword(email, password).catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      if (errorCode || errorMessage) {
        return {errorCode, errorMessage}
      }
    })
  }

  /**
   * Signs in user with email and password
   * @param email: User Email
   * @param password: User Password
   * @returns Error Code
   */
  static signinUserEmailPassword(email: string, password: string) {
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      if (errorCode || errorMessage) {
        return {errorCode, errorMessage}
      }
    })
  }
}
