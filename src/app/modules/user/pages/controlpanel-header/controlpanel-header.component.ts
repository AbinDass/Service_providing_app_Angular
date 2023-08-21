import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controlpanel-header',
  templateUrl: './controlpanel-header.component.html',
  styleUrls: ['./controlpanel-header.component.css']
})
export class ControlpanelHeaderComponent {
@Output('followrequst') newFollowers = new EventEmitter();
@Output('appointments') newAppointments = new EventEmitter();
@Output('workStatus') newWorkstatus = new EventEmitter();

followRequst(){
  this.newFollowers.emit()
}

newAppointment(){
  this.newAppointments.emit()
}

workStatus(){
  this.newWorkstatus.emit()
}
}
