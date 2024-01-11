import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsDashboardComponent } from './components/rooms/rooms-dashboard.component';
import { AddEditRoomsComponent } from './components/add-edit-rooms/add-edit-rooms.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [RoomsDashboardComponent, AddEditRoomsComponent],
  imports: [CommonModule, RoomsRoutingModule, SharedModule],
})
export class RoomsModule {}
