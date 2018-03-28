import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MainAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-app',
  templateUrl: 'main-app.html',
})
export class MainAppPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  changeBool = true;
  hours=0;
  minute=0;
  second=0;

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainAppPage');
  }
  takePic(){
    alert("camera On");
  }
  timerFunc(){
   this.changeBool = !this.changeBool;
   /* while(this.hours<24 && this.changeBool==true){
      while(this.minute<60 && this.changeBool==true){
        while(this.second<60 && this.changeBool==true){
          setTimeout(function(){
            this.second++;
          },1000);
        }
        this.minute++;
      }
      this.hours++;
    }*/
  }
}
