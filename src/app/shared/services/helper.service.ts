import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private _HttpClient: HttpClient) {}

  getCurrentUserData(userId: string | null): Observable<any> {
    return this._HttpClient.get(`users/${userId}`);
  }
}
