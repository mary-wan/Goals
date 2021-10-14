import { Quote } from './../quote-class/quote';
import { GoalService } from './../goal-service/goal.service';
import { Component, OnInit} from '@angular/core';
import { Goal } from '../goal';
import { AlertService } from '../alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goToUrl(id: any){
    this.router.navigate(['/goals',id])
  }
  // toggleDetails(index:number){
  //   this.goals[index].showDescription = !this.goals[index].showDescription;
  // }
  goals: Goal[];
  alertService!: AlertService;
  quote!: Quote;

  constructor(goalService:GoalService,alertService:AlertService, private http:HttpClient,private quoteService:QuoteRequestService, private router:Router){
    this.goals = goalService.getGoals()
    this.alertService = alertService;
  }
  ngOnInit(){
    this.quoteService.quoteRequest()
    this.quote= this.quoteService.quote
    
  }
  completeGoal(isComplete: boolean, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
        this.alertService.alertMe("This goal has been deleted")
      }
    }
  }
  deleteGoal(index:number){
    let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

    if (toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
    }
  }
  addNewGoal(goal: Goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.unshift(goal)
  }

  

}
