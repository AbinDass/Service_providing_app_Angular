import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { services } from '../../model/servicesType';

@Component({
  selector: 'app-admin-show-services',
  templateUrl: './admin-show-services.component.html',
  styleUrls: ['./admin-show-services.component.css']
})
export class AdminShowServicesComponent implements OnInit{
  servicelist!:services[]
  userid: string | null = JSON.parse(window.localStorage.getItem('userid')!);
  constructor(private adminService:AdminService){}
ngOnInit(): void {
  this.getAllSerices()
}
  getAllSerices(){
    this.adminService.allServices(this.userid).subscribe(data => this.servicelist = data.services)
  }

  serviceDelete(serviceId:string|undefined){
    const val = confirm(`do you want to delete the service`)
    if(val){
      this.adminService.deleteService(serviceId).subscribe(data =>{ if(data) this.getAllSerices()})
    }
  }
}
