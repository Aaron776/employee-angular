import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent} from './login/login.component';
import { AuthService} from './services/auth.service';



@NgModule({
    declarations: [
    AppComponent,
    LoginComponent
    ],
=======
import { ListActivityComponent } from './list-activity/list-activity.component';
import {ActivityService} from './services/activity.service';
import {EmployeeService}  from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ListActivityComponent
  ],
>>>>>>> master
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthService
  ],
<<<<<<< HEAD
=======
  providers: [
    ActivityService,
    EmployeeService

  ],
>>>>>>> master
  bootstrap: [AppComponent]
})
export class AppModule { }
