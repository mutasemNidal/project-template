import { HTTP } from '@ionic-native/http';
export class questions {
 i:number;
 private questionid :string;
 private type : string;
 private text : string ;
 url: string = "http://adoptsaba.com/volunteer/answerQuestion";
 
 public answers  : string [];
    constructor(public data:object ,private http: HTTP ){
        this.questionid=data['QuestionId'];
        this.type=data['type'];
        this.text=data['text'];
        this.answers=[];
    }
 send() {
    this.http.get(this.url, {
      type : this.type,
      QuestionId :this.questionid,
      answers : JSON.stringify(this.answers)
  
    }, {})
      .then(data => {
        console.log(data.status);
        console.log(data.data);
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });
 }
   
 
    
    getId(){
        return this.questionid;
    }
    print():String{
        return this.questionid +'   ' + this.type + '      '+ this.text + ' ' +this.answers  ;
    }
}