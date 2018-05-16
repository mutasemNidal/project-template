import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage'

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
    private storage: Storage
  ) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.userName="";
    this.password="";
  }

  logIN() {
    /*
    dataList":{"id":"3","userName":"Ddd","firstName":"Ddd","lastName":"bb",
    "birthDay":"0000-00-00","phone":"001122","location":"","identifyCard":"",
    "Email":"Ddd","image":"http:\/\/www.psdgraphics.com\/file\/add-user-icon.jpg",
    "ElderName":"ahmad sabah","CoordinatorName":"demo1","CoordinatorLocation":"alquds",
    "coordinatorImage":"http:\/\/localhost\/adopt-saba\/files\/images\/newUser.png",
    "coordinatorEmail":"","CoordinatorlastName":"","CoordinatorPhone":""}}
    */
    this.http.get(this.urlVolunteer, {
      userName: this.userName,
      password: this.password
    }, {})
      .then(data => {
        var ob = JSON.parse(data.data);
        console.log(data.data);
        
        this.access = ob.dataList;
        if (this.access != false) {
          this.navCtrl.setRoot("MainAppPage");
          this.storage.set('userName', ob.dataList.userName);
          this.storage.set('firstName', ob.dataList.firstName);
          this.storage.set('lastName', ob.dataList.lastName);
          this.storage.set('birthDay', ob.dataList.birthDay);
          this.storage.set('phone', ob.dataList.phone);
          this.storage.set('identifyCard', ob.dataList.identifyCard);
          this.storage.set('location', ob.dataList.location);
          this.storage.set('Email', ob.dataList.Email);
          this.storage.set('ElderName', ob.dataList.ElderName);
          this.storage.set('image',ob.dataList.image);
          this.storage.set('id',ob.dataList.id);
          this.storage.set('CoordinatorName',ob.dataList.CoordinatorName);
          this.storage.set('CoordinatorLocation',ob.dataList.CoordinatorLocation);
          this.storage.set('coordinatorImage',ob.dataList.coordinatorImage);
          this.storage.set('coordinatorEmail',ob.dataList.coordinatorEmail);
          this.storage.set('CoordinatorlastName',ob.dataList.coordinatorEmail);
          this.storage.set('CoordinatorPhone',ob.dataList.CoordinatorPhone);
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
