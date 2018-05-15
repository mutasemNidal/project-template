import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlertController } from 'ionic-angular';
//import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  YourFancyButton3: any;
  userName: string;
  password: string;
  access:boolean;
  urlVolunteer = "http://adoptsaba.com/Volunteer/acceptedVolunteer";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private screenOrientation: ScreenOrientation,
   // private http: HTTP,
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.access=false;
   // this.getAccessiblity();
  }
/*private getAccessiblity(){
  this.http.get(this.urlVolunteer, {

  }, {})
    .then(data => {
      var ob = JSON.parse(data.data);
      console.log(ob.dataList[0].userName);
      console.log(ob.dataList[0].passWord);
      for (var i = 0; i < ob.dataList.length; i++) {
        if (ob.dataList[i].userName == this.userName) {
          if (ob.dataList[i].passWord == this.password) {
            this.access=true;
          }
        } 
      }
    })
    .catch(error => {
      console.log(error.status);
      console.log(error.error);
      console.log(error.headers);
    });
}*/
  logIN() {
     // if(this.access==true){
        this.navCtrl.setRoot("MainAppPage");
  /*  }else {
        let alert = this.alertCtrl.create({
          title: 'Invaled user name or password !!!'
        });
        alert.present();
      }*/
  }
}
