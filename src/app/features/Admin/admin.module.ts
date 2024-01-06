import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { UsersDashboardComponent } from './components/users-dashboard/users-dashboard.component';
import { RoomsDashboardComponent } from './components/rooms-dashboard/components/rooms/rooms-dashboard.component';
import { AdsDashboardComponent } from './components/ads-dashboard/ads-dashboard.component';
import { AddEditRoomsComponent } from './components/rooms-dashboard/components/add-edit-rooms/add-edit-rooms.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeDashboardComponent,
    UsersDashboardComponent,
    RoomsDashboardComponent,
    AdsDashboardComponent,
    AddEditRoomsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
