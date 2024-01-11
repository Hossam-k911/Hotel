import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent {
  userId: string = '';
  userData!: any;
  constructor(
    private _UsersService: UsersService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.userId = _ActivatedRoute.snapshot.params['id'];
    this.viewUser(this.userId);
  }

  viewUser(id: string) {
    this._UsersService.getUserProfile(id).subscribe({
      next: (res) => {
        console.log(res.data.user);
        this.userData = res.data.user;
      },
      error: (err) => {},
      complete: () => {},
    });
  }
}
