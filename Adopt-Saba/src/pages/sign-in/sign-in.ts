import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  YourFancyButton3: any;
  userName: string;
  password: string;
  access: boolean;
  urlVolunteer = "http://adoptsaba.com/volunteer/singIn";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private screenOrientation: ScreenOrientation,
    private http: HTTP,
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  logIN() {
    this.http.get(this.urlVolunteer, {
      userName: this.userName,
      password: this.password
    }, {})
      .then(data => {
        var ob = JSON.parse(data.data);
        this.access=ob.dataList;
        console.log(data.data);
        if (this.access !=false) {
          this.navCtrl.setRoot("MainAppPage");
        } else {
          let alert = this.alertCtrl.create({
            title: 'Invaled user name or password !!!'
          });
          alert.present();
        }
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
  }
}
