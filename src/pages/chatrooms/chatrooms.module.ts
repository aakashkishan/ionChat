import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatroomsPage } from './chatrooms';

@NgModule({
  declarations: [
    ChatroomsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatroomsPage),
  ],
  exports: [
    ChatroomsPage
  ]
})
export class ChatroomsPageModule {}
