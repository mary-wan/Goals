import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { GoalService } from './goal-service/goal.service';
import { AlertService } from './alert-service/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AboutComponent } from './about/about.component';
import { QuoteComponent } from './quote/quote.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'goals', component: GoalComponent},
  { path: 'goals/:id', component: GoalDetailComponent },
  { path: 'about', component: AboutComponent},
  { path: 'quotes', component: QuoteComponent },
  {path:'',redirectTo:'goals', pathMatch: 'full'},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe,
    NavbarComponent,
    AboutComponent,
    QuoteComponent,
    NotFoundComponent,

  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
   
  ],
  exports: [RouterModule],
  providers: [GoalService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
