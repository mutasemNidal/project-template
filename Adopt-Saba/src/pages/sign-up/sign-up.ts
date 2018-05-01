import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  userName:string;
  email:string;
  password:string;
  confirmPass:string;
  phoneNumber:number;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  join(){
    let alert = this.alertCtrl.create({
      title: 'בקשתך נשלחה לרקז נה לחקות עד קבלת האישור',
      buttons: [
        {
          text: 'submit',
        }
      ]
    });
    alert.present();
  }

}
