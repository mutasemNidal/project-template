import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {ChangeDetectorRef} from '@angular/core'

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
  myDate = new Date().toISOString();
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private ref:ChangeDetectorRef) {
   
  }
  hour=0;
  minute=0;
  second=0;
  txt="Start";
  intrevalId:number;
 // intrevalDate:number; 
  intrevalDate= setInterval(() => {
   this.myDate = new Date().toISOString();
  },1000)


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainAppPage');
  }
  takePic(){
   // alert("camera On");
   module.controller('PictureCtrl', function($scope, $cordovaCamera) {

    document.addEventListener("deviceready", function () {
  
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
      correctOrientation:true
      };
  
      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
  
    }, false);
  });
  
  
  }
  timerFunc(){
    clearInterval(this.intrevalId);
    this.hour=0;
    this.minute=0;
    this.second=0;
    this.txt="started";
    this.intrevalId = setInterval(() => {
      this.second++;
      if(this.second==59){
        this.second=0;
        this.minute++;
      }
      if(this.minute==59){
        this.second=0;
        this.minute=0;
        this.hour++;
      }
      if(this.hour==23){
        this.second=0;
        this.minute=0;
        this.hour=0;     
      }
      this.ref.detectChanges();
    }, 1000);
  }
  stop(){
    clearInterval(this.intrevalId);
    this.txt="Start";
    this.intrevalId = -1;
  }
}
