import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {
panelData=''
incomingRequests:boolean = false;
incomingAppointments:boolean = false;
incomingWorkStatus:boolean = false;

showRequestHistory:boolean = false;

ngOnInit(): void {
  this.requests()
}
requests(){
  this.incomingAppointments = false;
  this.incomingWorkStatus = false;
  this.incomingRequests = true;

}

appontments() {
  this.incomingRequests = false;
  this.incomingWorkStatus = false;
  this.incomingAppointments = !this.incomingAppointments

  this.panelData = 'fawas'
}

workStatus() {
  this.incomingAppointments = false;
  this.incomingRequests = false;
  this.incomingWorkStatus = !this.incomingWorkStatus
  this.panelData = 'sahad'
}

}
