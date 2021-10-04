import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }
  newGoal = new Goal(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Goal>();

  submitGoal(){
    this.addGoal.emit(this.newGoal);
    this.newGoal = new Goal(0,"","",new Date());
  }
 

  ngOnInit(): void {
  }

}
