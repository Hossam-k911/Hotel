import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
// import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [{ path: '', component: BookingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class bookingsRoutingModule {}
