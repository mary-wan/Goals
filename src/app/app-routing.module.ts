import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GoalComponent } from './goal/goal.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  // { path: 'goals', component: GoalComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'quotes', component: QuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
