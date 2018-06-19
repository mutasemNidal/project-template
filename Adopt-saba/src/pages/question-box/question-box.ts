import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainAppPage } from '../main-app/main-app';
import { HTTP } from '@ionic-native/http';
import { questions } from './questions';
import { removeArrayItem } from 'ionic-angular/util/util';
import { ModalController } from 'ionic-angular';

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
  meetId:String;
  que: questions[] = [];
  questionsURL: string = "http://adoptsaba.com/volunteer/getQuestions";
  ConfirmUrl:string="http://adoptsaba.com/volunteer/confirmMeet";

  dataList;
  answers =  [];
  url: string = "http://adoptsaba.com/volunteer/answerQuestion";
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP ,  public modalCtrl: ModalController) {
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
        for (i = 0; i < this.dataList.length; i++) {
          this.que[i] = new questions(this.dataList[i],this.http);

        }
      })
      .catch(error => {
      });
    // console.log(this.answers);
  }
  submit(){

  this.que.forEach(ques => {
   ques.send();

   
    });
    this.http.get(  this.ConfirmUrl, {
      MeetId : MainAppPage.meetId

    }, {})
    .then(data => {
     
    })
    .catch(error => {
      console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
    });
   /* const modal = this.modalCtrl.create(MainAppPage);
    modal.present();*/
    this.navCtrl.push(MainAppPage);

   // this.que[1].send();
  }
  updateAnswer(answerId, questionId, value) {
    this.que.forEach(ques => {
      if (ques.getId() == questionId) {
        if (value == true) {
          ques.answers.push(answerId);
        }
        else {
          removeArrayItem(ques.answers,answerId);
        }
      }
    });





  }
  changeAnswer(value,qid){
    
    this.que.forEach(ques => {
      if (ques.getId() == qid)
      {
        ques.answers[0]=value;
      }
   
    });
   
  }
}
