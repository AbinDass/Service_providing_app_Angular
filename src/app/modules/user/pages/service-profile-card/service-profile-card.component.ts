import { Component, Input, OnInit } from '@angular/core';
import { workerState } from '../../model/workerState';
import { ControlpanelService } from '../../services/controlpanel.service';
import { Store } from '@ngrx/store';
import { tokenSelector } from '../../userState/auth/auth.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-profile-card',
  templateUrl: './service-profile-card.component.html',
  styleUrls: ['./service-profile-card.component.css'],
})
export class ServiceProfileCardComponent implements OnInit {
  @Input() Worker!: workerState;
  isAuth$ = this.store.select(tokenSelector);
  fromId: string = JSON.parse(window.localStorage.getItem('userid')!);
  // toId:string|undefined = this.Worker?.user._id;
  status: string = '';
  showHiring: boolean = false;
  constructor(
    private controlpanel: ControlpanelService,
    private store: Store,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getRequsts();
  }
  closeHire(){
    this.showHiring=!this.showHiring
  }
  Loginalert() {
    this.router.navigate(['/nearbyservices']);
  }

  getRequsts() {
    this.controlpanel
      .getRequests(this.fromId, this.Worker?.user._id)
      .subscribe((data) => (this.status = data));
  }
  requestHere() {
    this.isAuth$.subscribe((data)=>{
     if(!data) this.router.navigate(['/loginalert'])
    }) 
      
    this.controlpanel
      .followRequest(this.fromId, this.Worker?.user._id)
      .subscribe((data) => this.ngOnInit());
  }
  unfollow() {
    this.controlpanel
      .cancelFollowRequest(this.fromId, this.Worker?.user._id)
      .subscribe((data) => this.ngOnInit());
  }
}
