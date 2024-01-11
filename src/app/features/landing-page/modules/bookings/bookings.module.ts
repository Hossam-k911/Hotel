import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bookingsRoutingModule } from './bookings-routing.module';
import { BookingsComponent } from './components/bookings/bookings.component';

@NgModule({
  declarations: [
    BookingsComponent
  ],
  imports: [CommonModule, bookingsRoutingModule],
})
export class BookingsModule {}
