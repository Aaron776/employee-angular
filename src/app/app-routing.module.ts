import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListActivityComponent } from './list-activity/list-activity.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list/:id/:name/:lastName', component: ListActivityComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
