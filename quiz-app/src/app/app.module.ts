import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CratequizComponent } from './cratequiz/cratequiz.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { ReviewComponent } from './review/review.component';
import { ResultComponent } from './result/result.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from './quiz.service';
@NgModule({
  declarations: [
    AppComponent,
    CratequizComponent,
    CreatequizComponent,
    ReviewComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
