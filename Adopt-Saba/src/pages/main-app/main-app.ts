import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import {ChangeDetectorRef} from '@angular/core';
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

  hourL=0;
  minuteL=0;
  secondL=0;
  hourR=0;
  minuteR=0;
  secondR=0;
  temp=true;
  temp1=false;
  txt="Start";
  intrevalId:number;
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
    this.temp1=true;
    if(this.temp==true){
      this.temp=false;
      clearInterval(this.intrevalId);
      this.hourR=0;
      this.minuteR=0;
      this.secondR=0;
      this.hourL=0;
      this.minuteL=0;
      this.secondL=0;
      this.txt="started";
      this.intrevalId = setInterval(() => {
        this.secondR++;
        if(this.secondR==10){
          this.secondR=0;
          this.secondL++;
        }
        if(this.secondL==6){
          this.secondR=0;
          this.secondL=0;
          this.minuteR++;
        }
        if(this.minuteR==10){
          this.secondR=0;
          this.secondL=0;
          this.minuteR=0;
          this.minuteL++;
        }
        if(this.minuteL==6){
          this.secondR=0;
          this.secondL=0;
          this.minuteR=0;
          this.minuteL=0; 
          this.hourR++;  
        }
        if(this.hourR==10){
          this.secondR=0;
          this.secondL=0;
          this.minuteR=0;
          this.minuteL=0; 
          this.hourR=0;
          this.hourL++;  
        }
        if(this.hourL==2&&this.hourR==4){
          this.secondR=0;
          this.secondL=0;
          this.minuteR=0;
          this.minuteL=0; 
          this.hourR=0;
          this.hourL=0; 
          this.secondR++;
        }
        this.ref.detectChanges();
      }, 1000);
    }
  }
  reStart(){
    if(this.temp1==true){
      clearInterval(this.intrevalId);
      this.hourR=0;
      this.minuteR=0;
      this.secondR=0;
      this.hourL=0;
      this.minuteL=0;
      this.secondL=0;
      this.txt="started";
      this.intrevalId = setInterval(() => {
        this.secondR++;
        if(this.secondR==10){
          this.secondR=0;
          this.secondL++;
        }
        if(this.secondL==6){
          this.secondR=0;
          this.secondL=0;
          this.minuteR++;
        }
        if(this.minuteR==10){
          this.secondR=0;
          this.secondL=0;
          this.minuteR=0;
          this.minuteL++;
        }
        if(this.minuteL==6){
          this.secondR=0;
          this.secondL=0;
          this.minuteR=0;
          this.minuteL=0; 
          this.hourR++;  
        }
        if(this.hourR==10){
          this.secondR=0;
          this.secondL=0;
          this.minuteR=0;
          this.minuteL=0; 
          this.hourR=0;
          this.hourL++;  
        }
        if(this.hourL==2&&this.hourR==4){
          this.secondR=0;
          this.secondL=0;
          this.minuteR=0;
          this.minuteL=0; 
          this.hourR=0;
          this.hourL=0; 
          this.secondR++;
        }
        this.ref.detectChanges();
      }, 1000);
    }
  }
  stop(){
    this.temp=true;
    this.temp1=false;
    clearInterval(this.intrevalId);
    this.txt="Start";
    this.intrevalId = -1;
  }
}
