import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{} from '../contact/contact';
import { SignInPage } from '../sign-in/sign-in';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  YourFancyButton: any;
  constructor(public navCtrl: NavController) {
   
    this.YourFancyButton =SignInPage;
  }

  
    
}
