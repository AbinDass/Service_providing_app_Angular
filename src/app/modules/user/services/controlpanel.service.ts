import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appointment, appointmentStatus, requests } from '../model/controlPaanelTypes';

@Injectable({
  providedIn: 'root'
})
export class ControlpanelService {
  baseurl: string = 'https://social-expo.onrender.com/api';

  constructor(private http:HttpClient) { }
  allRequests(userid: string|null){
   return this.http.get<requests>(this.baseurl+`/getAllrequests?userid=${userid}`)
  }

  acceptRequest(Id: string|undefined, userid: string|null){
   return this.http.post(this.baseurl+`/acceptRequest?id=${Id}&userid=${userid}`,{})
  }

  getAppointment(userId: string|null){
   return this.http.get<appointment[]>(this.baseurl+`/getAppointment?id=${userId}`)
  }
  updateAppointment(userId: string|undefined, button:string){
   return this.http.patch(this.baseurl+`/makeAppointment?id=${userId}&button=${button}`,{})
  }

  getAppointmentStatus(userId: string|null){
   return  this.http.get<appointmentStatus[]>(this.baseurl+`/getAppointmentStatus?id=${userId}`)
  }

  getRequests(fromId: string|null, toId: string|undefined){
   return this.http.get<string>(this.baseurl+`/getRequestStatus?from=${fromId}&to=${toId}`)
  }
  followRequest(fromId: string|null, toId: string|undefined){
   return this.http.post(this.baseurl+"/requestWorker",{fromId,toId})
  }
  cancelFollowRequest(fromId: string|undefined, toId:string|undefined){
   return this.http.delete(this.baseurl+`/cancelRequest?fromid=${fromId}&toid=${toId}`)
  }

  makeAppointment(worker:string|undefined, user:string, date:string, time:string, desc:string){
    return this.http.post(this.baseurl+`/makeAppointment`,{worker, user, date, time, desc})
  }

}
