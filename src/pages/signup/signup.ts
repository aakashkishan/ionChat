import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

// Import the Users Interface and the User Provider
import { Users } from '../../models/interfaces/users';
import { UserProvider } from '../../providers/user/user';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  // SignUp Method using the Credentials from the SignUp Page
  signup() {

    // We will declare and initialize a loader for Cool Animations while storing the User Credentials takes place
    let loader = this.loadingCtrl.create({
      content: 'Wait until the User Credentials are stored'
    })

    // Start the Loader
    loader.present();

    // We are going to use the User Provider here to store the User Credentials of the SignUpees
    // We call the signUpee Method in the User Provider and the promise response can be Boolean or an JSON format Error
    this.userProvider.signUpee(this.newUser).then((response: any) => {

      // Since we got the response, there is no reason for the loader. So stop it
      loader.dismiss();

      // Check if the response is success or not
      if(!response.code) {
        this.navCtrl.push('PhotoPage');
      } else {
        alert(response);
      }
    })

  }

  // Back to the LoginPage Method
  back() {
    this.navCtrl.setRoot("LoginPage");
  }

}
