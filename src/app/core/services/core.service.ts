import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { iLogin } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  role: string | null = '';
  constructor(private http: HttpClient) {
    if (localStorage.getItem('token') !== null) {
      this.getProfile();
    }
  }
  login(loginData: iLogin) {
    return this.http.post(`users/login`, loginData);
  }

  // resetWithEmail(email) {
  //   return this.http.post(`Users/Reset/Request`, email);
  // }
  resetPassword(userData: any) {
    return this.http.post(`users/reset-password`, userData);
  }

  getProfile() {
    let encoded: any = localStorage.getItem('token');
    let decoded: any = jwtDecode(encoded);
    localStorage.setItem('role', decoded.role);
    localStorage.setItem('userId', decoded._id);
    this.getRole();
  }
  getRole() {
    if (
      localStorage.getItem('token') !== null &&
      localStorage.getItem('role')
    ) {
      this.role = localStorage.getItem('role');
    }
  }

  signUp(data: any): Observable<any> {
    return this.http.post('users', data);
  }

  // verifyEmail(data: IVerify): Observable<any> {
  //   return this.http.put('Users/verify', data);
  // }
}
