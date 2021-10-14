import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalComponent } from './goal/goal.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  { path: 'goals', component: GoalComponent},
  { path: 'goals/:id', component: GoalDetailComponent },
  { path: 'about', component: AboutComponent},
  { path: 'quotes', component: QuoteComponent },
  {path:'',redirectTo:'goals', pathMatch: 'full'},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
