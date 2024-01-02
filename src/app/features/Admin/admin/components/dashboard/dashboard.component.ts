import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  toggle: boolean = true;

  handleToggleChange(value: boolean) {
    this.toggle = value;
  }
}
