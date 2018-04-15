import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainAppPage } from './main-app';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
@NgModule({
  declarations: [
    MainAppPage,FormsModule
  ],
  imports: [
    IonicPageModule.forChild(MainAppPage),
  ],
  providers: [  Camera
  ]
})
export class MainAppPageModule {}
