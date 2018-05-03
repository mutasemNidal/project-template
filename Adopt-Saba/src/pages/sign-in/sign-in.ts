import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  YourFancyButton3: any;
  userName:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController, private screenOrientation: ScreenOrientation) {
    //this.YourFancyButton3 =MainAppPage;
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  logIN(){
   // if(this.userName=="Admin" &&this.password=="1234"){
        this.navCtrl.setRoot("MainAppPage");
  //   }else{
  //     let alert = this.alertCtrl.create({
  //       title: 'Invaled user name or password !!!',
  //       buttons: [
  //         {
  //           text: 'submit',
  //         }
  //       ]
  //     });
  //     alert.present();
  //   }
   }
}
