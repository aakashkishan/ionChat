import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

// Import the User Provider
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ChangepwdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-changepwd',
  templateUrl: 'changepwd.html',
})
export class ChangepwdPage {

  // declare the required private variables and its Type
  email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider: UserProvider,
              public loadingCtrl: LoadingController,public toastCtrl: ToastController, public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ChangepwdPage');
  }

  pwdReset() {

    // Set up a Toaster, an Alert and a Loader for User Convinience
    var toaster = this.toastCtrl.create({
      duration: 4000,
      position: 'bottom'
    });

    let loader = this.loadingCtrl.create({
      content: 'Reset Password is being sent to your Email'
    });

    let Alert = this.alertCtrl.create({
      buttons: ['OK'],
    });

    // We are going to execute the resetPwd Method in the User Provider
    // The response of the Promise can either be a success boolean vakue or Error JSON
    this.userProvider.resetPwd(this.email).then((response: any) => {

      // Launch the Loader when the Email is submitted
      loader.present();

      if(!response.code) {

        // set the ALert
        Alert.setTitle('Email Sent');
        Alert.setSubTitle('Please follow the Instructions in the Email Sent to Reset Password');

        // Stop Loading on Success Scenario
        loader.dismiss();

        // Toast Success Message
        toaster.setMessage('Reset Message has been sent to your Email');
        toaster.present();

        this.navCtrl.setRoot('LoginPage');
      } else {

        // Error Alert Message
        Alert.setTitle('Email Send Failed');

        loader.dismiss();

        // Toast Error Message
        toaster.setMessage('Error in sending Reset Password');

        alert(response);
      }
    })

  }

  back() {
    this.navCtrl.setRoot('LoginPage');
  }

}
