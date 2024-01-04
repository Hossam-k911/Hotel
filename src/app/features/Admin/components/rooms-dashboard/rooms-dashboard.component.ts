import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-rooms-dashboard',
  templateUrl: './rooms-dashboard.component.html',
  styleUrls: ['./rooms-dashboard.component.scss'],
})
export class RoomsDashboardComponent {
  rooms: any = [];
  totalCount: number = 0;

  roomsQueryObj = {
    pageSize: 10,
    page: 1,
  };
  constructor(
    private _AdminService: AdminService // private _UsersService: UsersService, // private ActivatedRoute: ActivatedRoute, // private dialog: MatDialog, // private toastr: ToastrService
  ) {
    this.getAllRooms(this.roomsQueryObj);
  }
  ngOnInit() {}

  getAllRooms(Query: any) {
    this._AdminService.getRooms(Query).subscribe((res: any) => {
      this.rooms = res.data.rooms;
      this.totalCount = res.data.totalCount;
      debugger;
    });
  }

  handlePaginationBtns(event: PageEvent) {
    this.getAllRooms(this.roomsQueryObj);
  }

  viewRoom(room: any) {}

  deleteRoom(room: any) {}

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.roomsQueryObj.pageSize = e.pageSize;
    this.roomsQueryObj.page = e.pageIndex;
    this.getAllRooms(this.roomsQueryObj);
  }
}
