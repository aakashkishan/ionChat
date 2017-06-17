// This is the Authenticator Provider

import { Injectable } from '@angular/core';

// Import the Credentials Interface and the AngularFire Authentication Module
import { AngularFireAuth } from 'angularfire2/auth';
import { UserCredentials } from '../../models/interfaces/credentials';

/*
  Generated class for the AuthenticatorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthenticatorProvider {

  constructor(public angularFireAuth: AngularFireAuth) {
    console.log('Hello AuthenticatorProvider Provider');
  }

  // SignIn Fucntion accepts credentials of type UserCredentials Interface
  signin(credentials: UserCredentials) {
    // Invoke a Promise
    var promise = new Promise((resolve, reject) => {
      // Use the AngularFire Authenticator to Authenticate the user using Email and Password
      this.angularFireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.pwd).then(() => {
        resolve(true);
      }).catch((error) => {
        reject(error);
      })
    })
    
    return promise;
  }

}
