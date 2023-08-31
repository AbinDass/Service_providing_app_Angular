import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search, addService, availableService, services } from '../model/serviceState';
import { workerState } from '../model/workerState';
import {BehaviorSubject, Observable} from 'rxjs'
import { locations } from '../model/locationType';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class NearbyservicesService {
  baseurl: string = 'https://social-expo.onrender.com/api';

 
  locationSubject$= new BehaviorSubject<string>('')

  constructor(private http: HttpClient) {}
  
  getNearByServices (){
   return this.http.get<availableService>(this.baseurl+'/services?userid=${userid}')
  }

  getServiceProfiles(title: string, userid: string|null, districtNow:string) {
    return this.http.get<workerState[]>(this.baseurl+`/workerlist?title=${title}&userid=${userid}&district=${districtNow}`)
  }

  user = window.localStorage.getItem('user')
  getUserLocation(){
    if(this.user){
      let user = JSON.parse(this.user)
      return user.distric
     }
  }

  getAlldistricts() {
     return this.http.get<string[]>(this.baseurl+'/district')
  }

  searchServices(userid:string|null, search:string , distval:string){
   return this.http.get<Search[]>(this.baseurl+`/searchservice?title=${search}&userId=${userid}&ditsrict=${distval}`)
  }
  getServices(userid:string|null): Observable<{services: services[]}>{
   return this.http.get<{services: services[]}>(this.baseurl+`/services?userid=${userid}`)
  }

  // mapbox
  
  mapboxLocation(search:string){
   return this.http.get<{features: locations[]}>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?country=IN&types=locality,district&access_token=${environment.MAPBOXKEY}`)
  }

  // addservice
  addService(data:addService){
    return this.http.post(this.baseurl+'/addservices',data)
  }
}
