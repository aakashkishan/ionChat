import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClustersPage } from './clusters';

@NgModule({
  declarations: [
    ClustersPage,
  ],
  imports: [
    IonicPageModule.forChild(ClustersPage),
  ],
  exports: [
    ClustersPage
  ]
})
export class ClustersPageModule {}
