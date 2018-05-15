import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var url = "http://adoptsaba.com/Volunteer/singUp"
var urlCoordinators = "http://adoptsaba.com/Volunteer/getAllCoordinator"
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  signUp = new Array();
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: number;
  coord: string;
  coordID: number;
  coordinatorList = [];
  coordinatorid;

  constructor(public navCtrl: NavController,
    private http: HTTP,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    private screenOrientation: ScreenOrientation,
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.getCoordinatorList();
  }
  private getCoordinatorList() {
    this.http.get(urlCoordinators, {

    }, {})
      .then(data => {
        var ob = JSON.parse(data.data);
        this.coordinatorid = ob;
        for (var i = 0; i < ob.dataList.length; i++) {
          this.coordinatorList[i] = ob.dataList[i].firstName;
        }
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
  }
  join() {
    let alert = this.alertCtrl.create({
      title: 'בקשתך נשלחה לרקז נה לחקות עד קבלת האישור',
      buttons: [
        {
          text: 'submit',
        }
      ]
    });
    for (var i = 0; i < this.coordinatorid.dataList.length; i++) {
      if (this.coordinatorid.dataList[i].firstName == this.coord)
        this.coordID = this.coordinatorid.dataList[i].id
    }
    console.log(this.coord);
    this.http.get(url, {
      userName: this.userName,
      password: this.password,
      email: this.email,
      confirmPass: this.confirmPassword,
      phone: this.phone,
      coordinatorId: this.coordID
    }, {})
      .then(data => {
        console.log(data.status);
        console.log(data.data);
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
    alert.present();
  }
}
