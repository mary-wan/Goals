import { Injectable } from '@angular/core';
import { Goals } from '../goal-list';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals(){
    return Goals;
  }
  getGoal(id:any):any{
    for (let goal of Goals){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}
