import { NgModule, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
// import { TimeAgoPipe } from 'time-ago-pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { TimeAgoPipe } from 'ngx-pipes';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoExtendsPipe extends TimeAgoPipe {

  // transform(value: string|Date): string {
  //   return super.transform(value);
  // }
}

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    NavbarComponent,
    TimeAgoExtendsPipe,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // TimeAgoPipe
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
