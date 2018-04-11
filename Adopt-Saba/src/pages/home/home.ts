import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{} from '../contact/contact';
import { SignInPage } from '../sign-in/sign-in';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  YourFancyButton: any;
  YourFancyButton2: any;
  constructor(public navCtrl: NavController) {
    this.YourFancyButton =SignInPage;
    this.YourFancyButton2 =SignUpPage;
  } 
}
