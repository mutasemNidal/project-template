import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MainAppPage } from '../main-app/main-app';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  Name: string;
  firstName: string;
  lastName: string;
  identifyCard;
  phone;
  userName;
  id;
  image;
  location;
  CoordinatorName;
  clocation;
  cPhone;
  elder;
  birthDay;
  Email;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    storage.get('userName').then((val) => {
      this.userName = val;
    });
    storage.get('firstName').then((val) => {
      this.firstName = val;
    });
    storage.get('lastName').then((val) => {
      this.lastName = val;
      this.Name = this.firstName + " " + this.lastName;
    });
    storage.get('phone').then((val) => {
      this.phone = val;
    });
    storage.get('image').then((val) => {
      this.image = val;
    });
    storage.get('ElderName').then((val) => {
      this.elder = val;
    });
    storage.get('identifyCard').then((val) => {
      this.identifyCard = val;
    });
    storage.get('birthDay').then((val) => {
      this.birthDay = val;
    });
    storage.get('Email').then((val) => {
      this.Email = val;
    });
    storage.get('location').then((val) => {
      this.location = val;
    });
    storage.get('CoordinatorName').then((val) => {
      this.CoordinatorName = val;
    });
    storage.get('CoordinatorPhone').then((val) => {
      this.cPhone = val;
    });
    storage.get('CoordinatorLocation').then((val) => {
      this.clocation = val;
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  backli() {
    this.navCtrl.setRoot(MainAppPage);

  }
}
