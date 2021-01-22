import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailActivityComponent} from './detail-activity/detail-activity.component';

const routes: Routes = [ 
  {path: 'detail/:id',component:DetailActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
