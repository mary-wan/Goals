import { Goal } from './../goal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  upvotes = 0;
  downvotes = 0;

  upVote(){
    this.upvotes = this.upvotes + 1;
  }

  downVote(){
    this.downvotes = this.downvotes + 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
