import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  {path:'takequiz' ,component:CreatequizComponent},
  {path:'reviewanswer' ,component:ReviewComponent},
  {path:'takequiz/results' ,component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
