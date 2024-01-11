import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDashboardComponent } from './components/users/users-dashboard.component';
import { ViewUserComponent } from './components/view-user/view-user.component';


@NgModule({
  declarations: [
    UsersDashboardComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
