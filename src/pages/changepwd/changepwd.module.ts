import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangepwdPage } from './changepwd';

@NgModule({
  declarations: [
    ChangepwdPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangepwdPage),
  ],
  exports: [
    ChangepwdPage
  ]
})
export class ChangepwdPageModule {}
