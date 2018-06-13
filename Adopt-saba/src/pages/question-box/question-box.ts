import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainAppPage } from '../main-app/main-app';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the QuestionBoxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question-box',
  templateUrl: 'question-box.html',
})
export class QuestionBoxPage implements OnInit {
  questionsURL: string = "http://adoptsaba.com/volunteer/getQuestions";
  dataList;
  answers=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }
  /**Multiple General */

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionBoxPage');

  }
  backli() {
    this.navCtrl.setRoot(MainAppPage);

  }
  ngOnInit() {
    this.http.get(this.questionsURL, {
    }, {})
      .then(data => {
        var i = 0;
        var ob = JSON.parse(data.data);
        this.dataList = ob.dataList;
      })
      .catch(error => {
      });
      console.log(this.answers);
  } 
  submit(){
    console.log(this.answers[44]);
  }
  updateAnswer(answerId,questionId,value){
    console.log(answerId);
    console.log(questionId);
    console.log(value);


  }
}
