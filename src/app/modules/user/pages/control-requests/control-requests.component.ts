import { Component, OnInit } from '@angular/core';
import { ControlpanelService } from '../../services/controlpanel.service';
import { requests } from '../../model/controlPaanelTypes';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-control-requests',
  templateUrl: './control-requests.component.html',
  styleUrls: ['./control-requests.component.css']
})
export class ControlRequestsComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();

  constructor(private controlpanel:ControlpanelService){}
  userid: string | null = JSON.parse(window.localStorage.getItem('userid')!);
  allrequests!:requests
  showmore: boolean = false;
ngOnInit(): void {
  this.getAllRequests()
}
  getAllRequests(){
    this.controlpanel.allRequests(this.userid)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => this.allrequests = data)
  }

  acceptRequest(requestId:string|undefined){
    this.controlpanel.acceptRequest(requestId, this.userid)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => console.log(data))
  }

  rejectRequest(){
    this.controlpanel
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
