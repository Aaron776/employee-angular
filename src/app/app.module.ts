import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';

import { ListActivityComponent } from './list-activity/list-activity.component';
import { ActivityService } from './services/activity.service';
import { EmployeeService } from './services/employee.service';
import { DetailActivityComponent } from './detail-activity/detail-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ListActivityComponent,
    LoginComponent,
    DetailActivityComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AuthService,
    ActivityService,
    EmployeeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
