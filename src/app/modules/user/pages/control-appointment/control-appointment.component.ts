import { Component, OnInit } from '@angular/core';
import { ControlpanelService } from '../../services/controlpanel.service';
import { appointment } from '../../model/controlPaanelTypes';

@Component({
  selector: 'app-control-appointment',
  templateUrl: './control-appointment.component.html',
  styleUrls: ['./control-appointment.component.css']
})
export class ControlAppointmentComponent implements OnInit{
  userid: string | null = JSON.parse(window.localStorage.getItem('userid')!);
  allAppointments!:appointment[]
  appointment:boolean=false;
constructor(private controlpanel:ControlpanelService){}

ngOnInit(): void {
  this.getAppointments()
}
getAppointments(){
  this.controlpanel.getAppointment(this.userid).subscribe(data => this.allAppointments = data)
}

confirmAppointment(appointId:string|undefined){
  let button = 'confirm'
  this.controlpanel.updateAppointment(appointId, button).subscribe((data) => console.log(data))
}

cancelAppointment(appointId:string|undefined){
  let button = 'cancel'
  this.controlpanel.updateAppointment(appointId, button).subscribe((data) => console.log(data))
}
}
