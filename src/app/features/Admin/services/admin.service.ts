import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private _HttpClient: HttpClient) {}

  getRooms(params: any): Observable<any> {
    return this._HttpClient.get(`rooms`, { params: params });
  }
}
