import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
import {LoginComponent} from './login/login.component';

const routes: Routes = [
{ path: '', component: LoginComponent },

<<<<<<< HEAD
=======
=======
import {ListActivityComponent} from './list-activity/list-activity.component';

const routes: Routes = [
  { path: 'list/:id/:name/:lastName', component:ListActivityComponent},
  
>>>>>>> master
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
