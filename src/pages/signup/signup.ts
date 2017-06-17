import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

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

  // We shall use the Users Interface Later in the Application
  // newUser = {} as Users;
  newUser = {
    email: '',
    pwd: '',
    uname: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider, 
              public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  // SignUp Method using the Credentials from the SignUp Page
  signup() {

    // We will also use the ToastController to deliver messages to the User during the Password Validation
    var toaster = this.toastCtrl.create({
      message: "Error",
      position: "bottom",
      duration: 4000
    });

    // We will declare and initialize a loader for Cool Animations while storing the User Credentials takes place
    let loader = this.loadingCtrl.create({
      content: 'Wait until the User Credentials are stored'
    });

    if(this.newUser.email == '' || this.newUser.pwd == '' || this.newUser.uname == '') {

      // If the Condition is true, then not all the inputs were fille. So send a toast asking the user to fill all inputs
      toaster.setMessage("All the fields are required to be filled!!");
      toaster.present();

    }

    else if (this.newUser.pwd.length < 8) {

      // Since the password filled by the User id less than 8 characters, the password is not Strong
      toaster.setMessage("Password is weak!!, Password Must be more than 8 characters long.");
      toaster.present();

    }

    else {

      // Start the Loader
      loader.present();

      // We are going to use the User Provider here to store the User Credentials of the SignUpees
      // We call the signUpee Method in the User Provider and the promise response can be Boolean or an JSON format Error
      this.userProvider.signUpee(this.newUser).then((response: any) => {
      //No toasting here since there are no Validation problems here

      // Since we got the response, there is no reason for the loader. So stop it
      loader.dismiss();

      // Check if the response is success or not
      if(response.success) {
        this.navCtrl.push('PhotoPage');
      } else {
        alert(response);
      }

      })
    }

  }

  // Back to the LoginPage Method
  back() {
    this.navCtrl.setRoot("LoginPage");
  }

}
