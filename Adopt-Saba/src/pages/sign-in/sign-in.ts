import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MainAppPage } from '../main-app/main-app';
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  YourFancyButton3: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.YourFancyButton3 =MainAppPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

}
