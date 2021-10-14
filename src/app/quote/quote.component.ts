import { Quote } from './../quote-class/quote';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service/alert.service';
import { GoalService } from '../goal-service/goal.service';
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 
  alertService!: AlertService;
  quote!: Quote;

  constructor(alertService:AlertService, private http:HttpClient,private quoteService:QuoteRequestService){
    this.alertService = alertService;
  }
  ngOnInit(){
    this.quoteService.quoteRequest()
    this.quote= this.quoteService.quote
    
  }

}
