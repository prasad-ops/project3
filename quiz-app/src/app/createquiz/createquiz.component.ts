import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})
export class CreatequizComponent implements OnInit {
  private quiz: Quiz;

  
  public op1: number;
  public op2: number;
  public op3: number;
  public op4: number;
  public op5: number;

  constructor(private service: QuizService, private router: Router) {
    this.quiz = new Quiz();
  }

  ques1a() {
    this.quiz.ans1 = "Madurai";
    this.op1 = 0;
  }
  ques1b() {
    this.quiz.ans1 = "Chennai";
    this.op1 = 1;

  }
  ques1c() {
    this.quiz.ans1 = "Coimbatore";
    this.op1 = 0;
  }
  ques1d() {
    this.quiz.ans1 = "Nagarkovil";
    this.op1 = 0;
  }

  ques2a() {
    this.quiz.ans2 = "Duragapur";
    this.op2 = 0;
  }
  ques2b() {
    this.quiz.ans2 = "Cooch Behar";
    this.op2 = 0;
  }
  ques2c() {
    this.quiz.ans2 = "Darjeeling";
    this.op2 = 0;
  }
  ques2d() {
    this.quiz.ans2 = "Kolkata";
    this.op2 = 1;
  }

  ques3a() {
    this.quiz.ans3 = "Trivandrum";
    this.op3 = 1;
  }
  ques3b() {
    this.quiz.ans3 = "Kochi";
    this.op3 = 0;
  }
  ques3c() {
    this.quiz.ans3 = "Kozhikode";
    this.op3 = 0;
  }
  ques3d() {
    this.quiz.ans3 = "Palakkad";
    this.op3 = 0;
  }

  ques4a() {
    this.quiz.ans4 = "Mysore";
    this.op4 = 0;
  }
  ques4b() {
    this.quiz.ans4 = "Mangalore";
    this.op4 = 0;
  }
  ques4c() {
    this.quiz.ans4 = "Bangalore";
    this.op4 = 1;
  }
  ques4d() {
    this.quiz.ans4 = "Bidar";
    this.op4 = 0;
  }

  ques5a() {
    this.quiz.ans5 = "Mumbai";
    this.op5 = 1;
  }
  ques5b() {
    this.quiz.ans5 = "Pune";
    this.op5 = 0;
  }
  ques5c() {
    this.quiz.ans5 = "Nagpur";
    this.op5 = 0;
  }
  ques5d() {
    this.quiz.ans5 = "Nashik";
    this.op5 = 0;


  }
  


  addQuiz() {
    this.quiz.result=this.op1 + this.op2 + this.op3 + this.op4 + this.op5;
    this.service.addQuiz(this.quiz).subscribe(res => this.gotoResult())

  }

  gotoResult() {
    this.quiz = new Quiz;

    this.router.navigate(['/takequiz/results'])
  }
  


  ngOnInit() {
  }

}
