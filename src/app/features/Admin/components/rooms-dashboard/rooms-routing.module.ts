import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsDashboardComponent } from './components/rooms/rooms-dashboard.component';
import { AddEditRoomsComponent } from './components/add-edit-rooms/add-edit-rooms.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: RoomsDashboardComponent },
  { path: 'add-room', component: AddEditRoomsComponent },
  { path: 'add-room/:id', component: AddEditRoomsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule {}
