import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { AdsDashboardComponent } from './components/ads-dashboard/ads-dashboard.component';
import { BookingsDashboardComponent } from './components/bookings-dashboard/bookings-dashboard.component';
import { FacilitiesDashboardComponent } from './components/facilities-dashboard/facilities-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeDashboardComponent },
      {
        path: 'rooms',
        loadChildren: () =>
          import('./components/rooms-dashboard/rooms.module').then(
            (m) => m.RoomsModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./components/users-dashboard/users.module').then(
            (m) => m.UsersModule
          ),
      },
      // { path: 'users', component: UsersDashboardComponent },
      { path: 'ads', component: AdsDashboardComponent },
      { path: 'bookings', component: BookingsDashboardComponent },
      { path: 'facilities', component: FacilitiesDashboardComponent },
    ],
  },
  // { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
