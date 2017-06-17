import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-navs',
  templateUrl: 'navs.html',
})
export class NavsPage {

  nav1: string = "ChatroomsPage";
  nav2: string = "ClustersPage";
  nav3: string = "ProfilePage";

  constructor() {
  }

}
