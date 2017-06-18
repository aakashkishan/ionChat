import { Injectable } from '@angular/core';

// Import the AngularFireAuth for FireBase Authentication capabilities
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {

  userData = firebase.database().ref('/users');

  constructor(public angularFireAuth: AngularFireAuth) {
    
  }

  // This Method is for Signing up the User
  signUpee(newUser) { 

    // Create a Promise that resolves if the User Credentials are successfully stored
    var promise = new Promise((resolve, reject) => {

      this.angularFireAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.pwd).then(() => {

        // Here we take care of updating the newUser's Profile
        this.angularFireAuth.auth.currentUser.updateProfile({
          // displayName & photoURL are firebase built in parameters
          displayName: newUser.uname,
          photoURL: 'https://www.shareicon.net/data/2016/08/05/807319_gaming_512x512.png'
        }).then(() => {

          // Here we take care of assigning a uid to the newUser and storing it along with other details in the Database
          this.userData.child(this.angularFireAuth.auth.currentUser.uid).set({
            uid: this.angularFireAuth.auth.currentUser.uid,
            displayName: newUser.uname,
            photoURL: 'https://www.shareicon.net/data/2016/08/05/807319_gaming_512x512.png'
          }).then(() => {

            // Here we resolve the promise if it is successful
            resolve({success: true});
          }).catch((error) => {
            // In case of Failure
            reject(error);
          }) // End of InnerMost Catch Block
        }).catch((error) => {
          reject(error);
        }) // End of the Middle Catch Block
      }).catch((error) => {
        reject(error);
      }) // End of the OuterMost Catch Block
    }) // End of Promise

    return promise;

  }

  // This Method is for Reseting the Password of the User
  resetPwd(email) {

    // Create a Promise that will send the Reset Password to the Email and resolve with Success Scenario
    var promise = new Promise((resolve, reject) => {

      // We let Firebase take care of sending a Reset Password to the specified Email
      firebase.auth().sendPasswordResetEmail(email).then(() => {
        // Boolean Success Scenario
        resolve(true);
      }).catch((error) => {
        // Error JSON
        reject(error);
      })

    }) // End of Promise

    return promise;

  }

}
