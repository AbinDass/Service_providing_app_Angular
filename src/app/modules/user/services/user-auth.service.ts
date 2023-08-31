import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user, userModel, userdata } from '../model/userState';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  // baseurl: string = 'https://social-expo.onrender.com/api';
  baseurl: string = 'https://social-expo.onrender.com/api';
  constructor(private http: HttpClient) {}

  userLogin(data: {
    email: string;
    password: string | null;
  }): Observable<user> {
    return this.http.post<user>(this.baseurl + '/postlogin', data);
  }

  userRegister(data: userModel) {
    return this.http.post<userdata>(this.baseurl + '/postsignup', data);
  }

  userLogout() {
    const val = confirm('are you sure you want to logout');
    if (val) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userid');
    }
  }

  autologin() {
    return {
      token: window.localStorage.getItem('token'),
      userid: window.localStorage.getItem('userid'),
      user: JSON.parse(window.localStorage.getItem('user')!),
    };
  }
}

// console.l