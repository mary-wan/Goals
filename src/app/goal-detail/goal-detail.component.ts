import { Goal } from './../goal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { GoalService } from '../goal-service/goal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input()
  goal!: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor(private route:ActivatedRoute, private service:GoalService,private router:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.goal = this.service.getGoal(id)
  }
  redirect(){
    this.router.navigate(['goals']);
  }

}
