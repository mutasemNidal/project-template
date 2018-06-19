import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage implements OnInit {
  dataList: any;
  reportURL: string = "http://adoptsaba.com/volunteer/MonthReport";
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
    
  }
  ngOnInit() {
    this.http.get(this.reportURL, {}, {})
      .then(data => {
        var ob = JSON.parse(data.data);
        this.dataList = ob.dataList[0]['CurrentMonthMeet'];
        })
      .catch(error => {
        console.log(error);
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

}
