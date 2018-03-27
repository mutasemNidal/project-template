import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainAppPage } from './main-app';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainAppPage,FormsModule
  ],
  imports: [
    IonicPageModule.forChild(MainAppPage),
  ],
})
export class MainAppPageModule {}
