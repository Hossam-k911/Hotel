import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { RoomsDashboardComponent } from './components/rooms-dashboard/components/rooms/rooms-dashboard.component';
import { AdsDashboardComponent } from './components/ads-dashboard/ads-dashboard.component';
import { AddEditRoomsComponent } from './components/rooms-dashboard/components/add-edit-rooms/add-edit-rooms.component';
import { BookingsDashboardComponent } from './components/bookings-dashboard/bookings-dashboard.component';
import { FacilitiesDashboardComponent } from './components/facilities-dashboard/facilities-dashboard.component';
import { RoomsModule } from './components/rooms-dashboard/rooms.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeDashboardComponent,
    // UsersDashboardComponent,
    // RoomsDashboardComponent,
    AdsDashboardComponent,
    // AddEditRoomsComponent,
    BookingsDashboardComponent,
    FacilitiesDashboardComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
