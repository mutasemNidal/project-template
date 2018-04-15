import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {ChangeDetectorRef} from '@angular/core'
import { Camera} from '@ionic-native/camera';


import { AlertController } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

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
  myDate = new Date(new Date().getTime()+(3*60*60*1000)).toISOString();
  public base64Image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private ref:ChangeDetectorRef,private alertCtrl: AlertController,private camera:Camera , private cameraPreview:CameraPreview ) {
   
  }
  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };
  hour=0;
  minute=0;
  second=0;
  txt="Start";
  intrevalId:number;
 // intrevalDate:number; 
  intrevalDate= setInterval(() => {
   this.myDate = new Date(new Date().getTime()+(3*60*60*1000)).toISOString();
  },1000)


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainAppPage');
  }
  
  takePic(){
   this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
  }).then((imageData) => {
    // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
  }, (err) => {
      console.log(err);
  });
}

  timerFunc(){
  
      let alert = this.alertCtrl.create({
        title: 'Low battery',
        subTitle: '10% of battery remaining',
        buttons: ['Dismiss']
      });
      alert.present();
    
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
