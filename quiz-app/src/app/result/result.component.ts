import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';
import { Route, Router } from '@angular/router';
import { Quiz } from '../quiz';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']

})
export class ResultComponent implements OnInit {
  private quiz:Quiz[];
  constructor(private service: QuizService, private router: Router) { 
    
  }
  
  review(){
    this.router.navigate(['/reviewanswer'])
  }

  
  ngOnInit() {
    this.service.getresult().subscribe(res=>{
      this.quiz=res})

    }

}
