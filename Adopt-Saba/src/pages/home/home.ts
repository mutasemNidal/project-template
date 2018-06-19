import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{} from '../contact/contact';
import { SignInPage } from '../sign-in/sign-in';
import { SignUpPage } from '../sign-up/sign-up';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  urlVolunteer = "http://adoptsaba.com/volunteer/singIn";
  access: boolean;
  userName :string ;
  password :string ;
  YourFancyButton: any;
  YourFancyButton2: any;
  constructor(public navCtrl: NavController ,   private storage: Storage , private http:HTTP) {
    this.YourFancyButton =SignInPage;
    this.YourFancyButton2 =SignUpPage;
    this.password="";
    this.userName="";
    
  // this.signIn();  
  } 
  signIn(){

     
    this.http.get(this.urlVolunteer, {
      userName: this.userName,
      password: this.password

    }, {})
      .then(data => {
       var ob = JSON.parse(data.data);
       console.log(data.data);
        this.access = ob.SuccessStatus;
        console.log( ob.dataList.userName);

         if (this.access != false &&ob.dataList!=null ) {
          this.navCtrl.setRoot("MainAppPage");

         }
      })
      .catch(error => {
        console.log(error);
        console.log("geekkf");
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });



  }
}
