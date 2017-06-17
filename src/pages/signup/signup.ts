import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Import the Users Interface
import { Users } from '../../models/interfaces/users';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  newUser = {} as Users;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  // SignUp Method using the Credentials from the SignUp Page
  signup() {
    // We are going to use the User Provider here to store the User Credentials of the SignUpees
    // We call the signUpee Method in the User Provider



  }

  // Back to the LoginPage Method
  back() {
    this.navCtrl.setRoot("LoginPage");
  }

}
