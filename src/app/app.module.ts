import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListActivityComponent } from './list-activity/list-activity.component';
import {ActivityService} from './services/activity.service';
import {EmployeeService}  from './services/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    ListActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ActivityService,
    EmployeeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
