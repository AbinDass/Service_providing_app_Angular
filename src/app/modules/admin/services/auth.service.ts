import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl: string = 'http://localhost:8000/admin';

  constructor(private http:HttpClient) { }

  adminLogin(data:{email:string, password:string}){
   return this.http.post<{admin:boolean}>(this.baseurl+'/adminlogin',data)
  }
}
