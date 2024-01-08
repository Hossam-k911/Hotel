import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/core/services/core.service';
import { IMenu } from '../../models/menu.models';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  @Output() isOpenedValue = new EventEmitter<boolean>();

  isOpened: boolean = true;
  constructor(
    private core: CoreService,
    private router: Router,
    private toastr: ToastrService // public dialog: MatDialog
  ) {}

  isAdmin(): boolean {
    return this.core.role == 'admin' ? true : false;
  }

  menu: IMenu[] = [
    {
      title: 'Home',
      icon: 'fa-solid fa-house',
      link: '/admin/home',
      isActive: this.isAdmin(),
    },

    {
      title: 'Users',
      icon: 'fa-solid fa-users',
      link: '/admin/users',
      isActive: this.isAdmin(),
    },
    {
      title: 'Rooms',
      icon: 'fa-solid fa-calendar-day',
      link: '/admin/rooms',
      isActive: this.isAdmin(),
    },
    {
      title: 'ads',
      icon: 'fa-solid fa-list-check',
      link: '/admin/ads',
      isActive: this.isAdmin(),
    },
    {
      icon: 'fa-solid fa-users ',
      title: 'Bookings',
      link: '/admin/bookings',
      isActive: this.isAdmin(),
    },
    {
      icon: 'fa-solid fa-layer-group ',
      title: 'Facilities',
      link: '/admin/facilities',
      isActive: this.isAdmin(),
    },
  ];
  onToggleClick() {
    this.isOpened = !this.isOpened;
    this.isOpenedValue.emit(this.isOpened);
  }
}
