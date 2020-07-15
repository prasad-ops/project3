import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private url:string;
  

  constructor(private http:HttpClient) { 
    this.url="http://localhost:1100/takequiz";
    
  }

  public addQuiz(quiz:Quiz){
    return this.http.post<Quiz>(this.url,quiz);
  }

  public getresult(){
    return this.http.get<Quiz[]>(this.url+"/results");

  }
}
