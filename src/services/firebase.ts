/**
 * Service for implementing fireauth and firestore for tracking water usage and facts
 */
import * as firebase from 'firebase'

const {apiKey, appId, authDomain, databaseURL, messagingSenderId, projectId, storageBucket} = require('../../config')
// Set the configuration for your app
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
   * @param username User username
   * @returns Error Code
   */
  static createUserEmailPassword(email: string, password: string, username: string): any {
    auth.createUserWithEmailAndPassword(email, password).catch(error => {
      const errorMessage = error.message
      if (errorMessage) {
        return errorMessage
      } else {
        // @ts-ignore
        auth.currentUser.updateProfile({
          displayName: username
        }).then(() => {
          return true
        }).catch(error => {
          return error
        })
        return 'User Created'
      }
    })
    // @ts-ignore
    // .updateProfile({
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
