import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { AlertController } from 'ionic-angular';
//import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { AboutPage } from '../about/about'
import { ContactPage } from '../contact/contact'
import { PopoverController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { CalendarPage } from '../calendar/calendar';
import { ProfilePage } from '../profile/profile';
import { Storage } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';
import { QuestionBoxPage } from '../question-box/question-box';
import { ModalController } from 'ionic-angular';

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
  public static meetId: String;
  myDate = new Date(new Date().getTime() + (3 * 60 * 60 * 1000)).toISOString();
  public base64Image: string;
  imagesCount: number;
  images: string[] = [];
  firstName: string;
  lastName: string;
  cordnum: string;
  startTime = 0;
  date: Date;
  d: string;
  hour = 0;
  minute = 0;
  second = 0;
  tempTime;
  temp = true;
  temp1 = false;
  show = false;
  start = false;
  txt = "Start";
  volunteerName = "";
  volunteerNum = "";
  idNum = "";
  intrevalId: number;
  startURL: string = "http://adoptsaba.com/volunteer/startMeet";
  stopURL: string = "http://adoptsaba.com/volunteer/endMeet";
  questionsURL: string = "http://adoptsaba.com/volunteer/getQuestions";
  meetURL: string = "http://adoptsaba.com/volunteer/OpenedMeet";
  /************************************************************************************************************************************************** */
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public menuCtrl: MenuController,
    /*  private screenOrientation: ScreenOrientation,*/
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private camera: Camera,
    private storage: Storage,
    private http: HTTP, ) {
    this.imagesCount = 0;
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.date = new Date();
    storage.get('firstName').then((val) => {
      this.firstName = val;
    });
    storage.get('lastName').then((val) => {
      this.lastName = val;
    });
    storage.get('CoordinatorPhone').then((val) => {
      this.cordnum = val;
    });
    /*this.http.get(this.meetURL, {}, {})
    .then(data => {
      var ob = JSON.parse(data.data);
      var dataList=ob.dataList;
     
      this.startTime=dataList.startTime;
      this.d =new Date(this.date.getTime()-this.startTime).getTime();
      console.log(this.d);
    })
    .catch(error => {
    });*/
    clearInterval(this.intrevalId);
    this.checkOpenedMeet();

  }
 
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
  checkOpenedMeet(){
    this.http.get(this.meetURL, {}, {}).then(data => {
      var ob = JSON.parse(data.data);
      var endList = ob.dataList;
      this.d = endList['startTime'];
      console.log(endList['startTime']);
      this.start = true;
      this.temp1 = true;
      if (this.temp == true) {
        this.temp = false;
        clearInterval(this.intrevalId);
        let options = {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'UTC'
        }
        var serverTime=parseFloat(this.d);
        var currentTimeInMs=(new Date()).getTime();
        var correctTime=currentTimeInMs-serverTime;
        
        console.log(new Date(serverTime));
        
        this.tempTime = new Date(correctTime).toLocaleString('en-GB', options);
        this.txt = "started";
        this.intrevalId = setInterval(() => {
          var currentTimeInMs=(new Date()).getTime();
          var correctTime=currentTimeInMs-serverTime;
          this.d += 1000;
          this.tempTime = new Date(correctTime).toLocaleString('en-GB', options);
        }, 1000);
      }
    }).catch(error=>{
      
    });
  }


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
  StartMeet() {

    this.http.get(this.startURL, {}, {})
      .then(data => {
      this.checkOpenedMeet();
      })
      .catch(error => {
        console.log("jkhkhkj")
      });


  }
  stop() {

    this.start = false;
    this.temp = true;
    this.temp1 = false;
    clearInterval(this.intrevalId);
    this.intrevalId = -1;
    if (this.txt != "Start") {
      this.http.get(this.stopURL, {}, {})
        .then(data => {
          var ob = JSON.parse(data.data);
          var endList = ob.dataList;

          MainAppPage.meetId = endList.id;
        })
        .catch(error => {
          console.log(error.status);
          console.log(error.error);
          console.log(error.headers);
        });
        clearInterval(this.intrevalId);

      const modal = this.modalCtrl.create(QuestionBoxPage);
      modal.present();


    } else {
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
    this.txt = "Start";
  }
  /********************************************************************************************************************************************** */

  /********************************************************************************************************************************************** */

  call() {
    setTimeout(() => {
      let tel = this.cordnum;
      window.open(`tel:${tel}`, '_system');
    }, 100);
  }
  /**********************************************************************************************************************************************/
  menu() {

    this.menuCtrl.open();
  }
  /**********************************************************************************************************************************************/
  signout() {
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
  /**********************************************************************************************************************************************/
  home() {
    this.navCtrl.setRoot(HomePage);
  }
  /**********************************************************************************************************************************************/
  about() {
    this.navCtrl.setRoot(AboutPage);
  }
  /**********************************************************************************************************************************************/
  contact() {
    this.navCtrl.setRoot(ContactPage);
  }
  /**********************************************************************************************************************************************/
  showProfile(myEvent) {
    /*  let popover = this.popoverCtrl.create(ProfilePage);
      popover.present({
        ev: myEvent
      });*/
    const modal = this.modalCtrl.create(ProfilePage);
    modal.present();
  }

  notify(myEvent) {
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
  calender(myEvent) {
    let popover = this.popoverCtrl.create(CalendarPage);
    popover.present({
      ev: myEvent
    });
  }
}
/* 
 
 
 
 
 
 
 * 
 * 
 * 
 */