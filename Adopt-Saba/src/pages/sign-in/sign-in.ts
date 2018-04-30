import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MainAppPage } from '../main-app/main-app';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  YourFancyButton3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
    this.YourFancyButton3 =MainAppPage;
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

}
