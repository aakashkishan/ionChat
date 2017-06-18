import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Import the Login Credentials Interface and the Authentication Provider
import { UserCredentials } from '../../models/interfaces/credentials';
import { AuthenticatorProvider } from '../../providers/authenticator/authenticator';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // Create Credentials Object with UserCredentials Interface Structure
  Credentials = {} as UserCredentials;

  // Include the AuthenticatorProvider type parameter as an argument in the constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthenticatorProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // The Login Fucntion to handle the LoginPage's Login Credentials
  login() {
    // Since the Promise may return a vakue of type Boolean and Error JSON, we have to accept response of any type.
    // Check the AuthenticatorProvider for info on the Promise
    this.authProvider.signin(this.Credentials).then((response: any) => {
      if(!response.code) {
        this.navCtrl.setRoot('NavsPage');
      } else {
        alert(response);
      }
    })
  }

  // The SignUp Method to handle the LoginPage's SignUp
  toSignup() {
    // Redirect to the SignUp Page
    this.navCtrl.push('SignupPage');
  }

  // The forgotPassword Method to handle the ChangePassword Page
  forgotPassword() {
    // Redirect to the ChangePassword Page
    this.navCtrl.push('ChangepwdPage');
  }

}
