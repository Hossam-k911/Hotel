import { Component } from '@angular/core';
import { IFacilities } from '../../models/rooms';
import { RoomsService } from '../../services/rooms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-rooms',
  templateUrl: './add-edit-rooms.component.html',
  styleUrls: ['./add-edit-rooms.component.scss'],
})
export class AddEditRoomsComponent {
  files: File[] = [];
  imgSrc: any;
  roomId: string = '';
  hideRequiredMarker: boolean = true;
  facilities: IFacilities[] = [];
  isUpdatePge: boolean = false;
  roomData: any;
  constructor(
    private _RoomsService: RoomsService,
    private _ActivatedRoute: ActivatedRoute,
    private _ToastrService: ToastrService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    this.roomId = this._ActivatedRoute.snapshot.params['id'];

    this._ActivatedRoute.queryParams.subscribe((res: any) => {
      if (res === 'view') {
        this.roomForm.disable();
      }
    });

    if (this.roomId) {
      this.isUpdatePge = true;
      this.getRoomById(this.roomId);
    } else {
      this.isUpdatePge = false;
    }
    this.getAllFaclities();
  }

  getAllFaclities() {
    this._RoomsService.getFacilities().subscribe({
      next: (res) => {
        console.log(res.data.facilities);
        this.facilities = res.data.facilities;
      },
      error: (err) => {},
      complete: () => {},
    });
  }

  roomForm = new FormGroup({
    roomNumber: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    discount: new FormControl(null, [Validators.required]),
    capacity: new FormControl(null, [Validators.required]),
    facilities: new FormControl(null, [Validators.required]),
  });

  onSubmit(data: FormGroup) {
    let mydata = new FormData();
    let myMap = new Map(Object.entries(data.value));
    mydata.append('roomNumber', data.value.roomNumber),
      mydata.append('price', data.value.price),
      mydata.append('discount', data.value.discount),
      mydata.append('capacity', data.value.capacity);
    // mydata.append('facilities', data.value.facilities[0]),
    // mydata.append('facilities', data.value.facilities[1]);
    //  for (const [key,value] of myMap) {
    //   mydata.append(key,data.value[key])
    //   console.log(key,data.value[key]);

    //  }
    for (const f of data.value.facilities) {
      mydata.append('facilities', f);
    }

    if (this.imgSrc == null) {
      // No Action
    } else {
      mydata.append('imgs', this.imgSrc, this.imgSrc.name);
    }

    console.log(mydata);
    if (this.roomId) {
      this._RoomsService.updateRoom(this.roomId, mydata).subscribe({
        next: (res) => {
          console.log(res);
          this._ToastrService.success(res.message);
        },
        error: (err) => {
          this._ToastrService.error(err.message);
        },
        complete: () => {
          this._Router.navigate(['/admin/rooms']);
        },
      });
    } else {
      this._RoomsService.addRoom(mydata).subscribe({
        next: (res) => {
          console.log(res);
          this._ToastrService.success(res.message);
        },
        error: (err) => {},
        complete: () => {
          this._Router.navigate(['/admin/rooms']);
        },
      });
    }
  }

  getRoomById(id: string) {
    this._RoomsService.getRoombyId(id).subscribe({
      next: (res) => {
        console.log(res.data.room);
        this.roomData = res.data.room;
      },
      error: (err) => {},
      complete: () => {
        this.imgSrc = 'http://upskilling-egypt.com/' + this.roomData.images;
        this.roomForm.patchValue({
          roomNumber: this.roomData.roomNumber,
          price: this.roomData.price,
          discount: this.roomData.discount,
          capacity: this.roomData.capacity,
          facilities: this.roomData.facilities,
        });
      },
    });
  }
  onSelect(event: any) {
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
