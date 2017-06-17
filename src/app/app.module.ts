import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Importing AngularFire2 for Authentication purposes & Database purposes.
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

// Importing the Angular FireBase Configurations
import { fireBaseConfig } from './app.angularfireconfig'

// Providers are included automatically
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticatorProvider } from '../providers/authenticator/authenticator';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top'}), // The TabsPlacement is to place the Tabs at the top of the Navigation Page
    AngularFireModule.initializeApp(fireBaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticatorProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
