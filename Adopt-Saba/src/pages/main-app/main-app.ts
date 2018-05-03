import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MenuController } from 'ionic-angular';
import{HomePage} from '../home/home'

/**
 * Generated class for the MainAppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-app',
  templateUrl: 'main-app.html'

})
export class MainAppPage {
  YourFancyButton: any;

  myDate = new Date(new Date().getTime() + (3 * 60 * 60 * 1000)).toISOString();
  public base64Image: string;
  imagesCount: number;
  images: string[] = [];
  constructor(public navCtrl: NavController,public menuCtrl: MenuController, private screenOrientation: ScreenOrientation, public navParams: NavParams, private alertCtrl: AlertController, private camera: Camera) {
    this.imagesCount = 0;
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
   // menu.enable(true);

  }
  hourL = 0;
  minuteL = 0;
  secondL = 0;
  hourR = 0;
  minuteR = 0;
  secondR = 0;
  temp = true;
  temp1 = false;
  txt = "Start";
  intrevalId: number;
  /********************************************************************************************************************************************** */

  pushImage(name: string) {
    this.images[this.imagesCount] = name;
    this.imagesCount++;
  }
  /********************************************************************************************************************************************** */

  intrevalDate = setInterval(() => {
    this.myDate = new Date(new Date().getTime() + (3 * 60 * 60 * 1000)).toISOString();
  }, 1000)

  /********************************************************************************************************************************************** */

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainAppPage');
  }
  /********************************************************************************************************************************************** */

  takePic() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.pushImage(this.base64Image);
    }, (err) => {
      console.log(err);
    });
  }
  /********************************************************************************************************************************************** */
  timerFunc() {
    this.temp1 = true;
    if (this.temp == true) {
      this.temp = false;
      clearInterval(this.intrevalId);
      this.hourR = 0;
      this.minuteR = 0;
      this.secondR = 0;
      this.hourL = 0;
      this.minuteL = 0;
      this.secondL = 0;
      this.txt = "started";
      this.intrevalId = setInterval(() => {
        this.secondR++;
        if (this.secondR == 10) {
          this.secondR = 0;
          this.secondL++;
        }
        if (this.secondL == 6) {
          this.secondR = 0;
          this.secondL = 0;
          this.minuteR++;
        }
        if (this.minuteR == 10) {
          this.secondR = 0;
          this.secondL = 0;
          this.minuteR = 0;
          this.minuteL++;
        }
        if (this.minuteL == 6) {
          this.secondR = 0;
          this.secondL = 0;
          this.minuteR = 0;
          this.minuteL = 0;
          this.hourR++;
        }
        if (this.hourR == 10) {
          this.secondR = 0;
          this.secondL = 0;
          this.minuteR = 0;
          this.minuteL = 0;
          this.hourR = 0;
          this.hourL++;
        }
        if (this.hourL == 2 && this.hourR == 4) {
          this.secondR = 0;
          this.secondL = 0;
          this.minuteR = 0;
          this.minuteL = 0;
          this.hourR = 0;
          this.hourL = 0;
          this.secondR++;
        }
      }, 1000);
    }
  }
  /********************************************************************************************************************************************** */

  stop() {
    this.temp = true;
    this.temp1 = false;
    clearInterval(this.intrevalId);
    this.txt = "Start";
    this.intrevalId = -1;
    if (this.minuteR * 10 + this.secondR != 0) {
      let alert = this.alertCtrl.create({
        title: 'דוח ',
        subTitle: 'אנא ציין/י את אופי המפגשים (ניתן ורצוי לבחור יותר מאחת) *',
        inputs: [
          {
            type: 'checkbox',
            label: 'משחקי חברה',

          },
          {
            type: 'checkbox',
            label: 'שיחות אקטואליה',
          }
          ,
          {
            type: 'checkbox',
            label: 'שימוש במחשב',
          },
          {
            type: 'checkbox',
            label: 'פעילות מחוץ לבית הקשיש',
          },
          {
            type: 'checkbox',
            label: 'בישול',
          },
          {
            type: 'checkbox',
            label: 'מוזיקה',
          },
          {
            type: 'checkbox',
            label: 'other',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'submit',
            handler: data => {
              let alert = this.alertCtrl.create({
                title: 'האם היו אירועים חריגים הדורשים התערבות גורם מוסמך?/ אירועים חיוביים שתרצה לחלוק איתנו?',
                inputs: [
                  {
                    name: 'text',
                    placeholder: 'enter your text'
                  }
                ],
                buttons: [
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                      console.log('Cancel clicked');
                    }
                  },
                  {
                    text: 'submit',
                    handler: data => {
                      //sent data to the website
                    }
                  }
                ]
              });
              alert.present();
            }

          }

        ]
      });
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: '!!!תתחיל הטיימר קודם',
        buttons: [
          {
            text: 'submit',
          }
        ]
      });
      alert.present();
    }
    // this.hourL = 0;
    // this.minuteL = 0;
    // this.secondL = 0;
    // this.hourR = 0;
    // this.minuteR = 0;
    // this.secondR = 0;
  }
  /********************************************************************************************************************************************** */

  call() {
    setTimeout(() => {
      let tel = "0502145087";
      window.open(`tel:${tel}`, '_system');
    }, 100);
  }
/**********************************************************************************************************************************************/
menu(){

    this.menuCtrl.open();
  }
/**********************************************************************************************************************************************/
signout(){
  let alert = this.alertCtrl.create({
    title: 'Confirm sign out',
    message: 'Do you want to sign out?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'confirm',
        handler: () => {
          this.navCtrl.setRoot(HomePage);
        }
      }
    ]
  });
  alert.present();
}

}
