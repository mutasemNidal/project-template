import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionBoxPage } from './question-box';

@NgModule({
  declarations: [
    QuestionBoxPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionBoxPage),
  ],
})
export class QuestionBoxPageModule {}
