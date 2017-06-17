import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavsPage } from './navs';

@NgModule({
  declarations: [
    NavsPage,
  ],
  imports: [
    IonicPageModule.forChild(NavsPage),
  ],
  exports: [
    NavsPage
  ]
})
export class NavsPageModule {}
