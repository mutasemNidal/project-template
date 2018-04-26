import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainAppPage } from './main-app';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import {CallNumber}from'@ionic-native/call-number'
@NgModule({
  declarations: [
    MainAppPage,FormsModule
  ],
  imports: [
    IonicPageModule.forChild(MainAppPage),
  ],
  providers: [  Camera,CallNumber
  ]
})
export class MainAppPageModule {}
