import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userData: any = {};

  ngOnInit() {
    this.getCurrentUser();
  }

  constructor(
    private _HelperService: HelperService,
    public _Dialog: MatDialog
  ) {}
  getCurrentUser(): void {
    let userId = localStorage.getItem('userId');

    this._HelperService.getCurrentUserData(userId).subscribe((res: any) => {
      this.userData = res.data.user;
      this.userData.profileImage.trim();
      console.log(this.userData);
    });
  }

  openLogoutDialog(): void {
    //   const dialogRef = this._Dialog.open(LogoutComponent, {
    //     data: {},
    //     width: '25%',
    //   });
    //   dialogRef.afterClosed().subscribe((result: any) => {
    //     if (result) {
    //     }
    //   });
  }
}
