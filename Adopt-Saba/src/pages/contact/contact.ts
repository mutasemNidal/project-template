import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }

}
