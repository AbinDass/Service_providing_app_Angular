import { Component, OnInit } from '@angular/core';
import { ControlpanelService } from '../../services/controlpanel.service';
import { appointmentStatus } from '../../model/controlPaanelTypes';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-control-upcoming',
  templateUrl: './control-upcoming.component.html',
  styleUrls: ['./control-upcoming.component.css']
})
export class ControlUpcomingComponent implements OnInit{
  private ngUnsubscribe = new Subject<void>();
  constructor(private controlpanel:ControlpanelService){}
  userid: string | null = JSON.parse(window.localStorage.getItem('userid')!);
  appointmentStatus!:appointmentStatus[]
  showMoreStatus:boolean = false;
ngOnInit(): void {  
  this.getAppointmentStatus()
}
  getAppointmentStatus(){
    this.controlpanel.getAppointmentStatus(this.userid)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => {
      this.appointmentStatus = data
    })
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
