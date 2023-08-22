import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userData, usersList } from '../model/usersType';
import { userdata } from '../../user/model/userState';
import { workers } from '../model/workerTypes';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseurl: string = 'http://localhost:8000/admin';

  constructor(private http:HttpClient) { }
  getUserList(){
   return this.http.get<{userdata:userData[]}>(this.baseurl+`/userlist`)
  }
  blockUser(userId:string|undefined){
   return this.http.post(this.baseurl+`/blockuser`,{userId})
  }
  unblockUser(userId:string|undefined){
   return this.http.post(this.baseurl+`/unblockuser`,{userId})
  }

  workerList(){
   return this.http.get<workers[]>(this.baseurl+`/workerslist`)
  }

  approveWorker(workerid:string|undefined,button:string){
    return this.http.post(this.baseurl+'/approveworker',{worker:workerid,button})
  }
}
