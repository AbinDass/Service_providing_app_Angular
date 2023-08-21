import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NearbyservicesService } from '../../services/nearbyservices.service';
import { workerState } from '../../model/workerState';
import { Store } from '@ngrx/store';
import { tokenSelector } from '../../userState/auth/auth.selector';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-serviceprofile',
  templateUrl: './serviceprofile.component.html',
  styleUrls: ['./serviceprofile.component.css'],
})
export class ServiceprofileComponent implements OnInit {
  location!: string;
  title!: string;
  allWorkers!: workerState[];
  showAddService: boolean = false;
  isAuth$ = this.store.select(tokenSelector);
  constructor(
    private routes: ActivatedRoute,
    private service: NearbyservicesService,
    private store: Store,
    private subscribe: SubscriptionService
  ) {}
  ngOnInit(): void {
    this.routes.paramMap.subscribe((param) => {
      this.title = param.get('servicename')!;
      this.isAuth$.subscribe((data) => {
        if(data) this.getSubscription()
      })
      
    });


    this.service.locationSubject$.subscribe((data) => {
      this.location = data;
      if (this.title) this.workerList(this.title);
    });

    this.isAuth$.subscribe((data) => {
      if(data) this.checkSubscription();
    })
  }
  showLocation = true;

  userid: string | null = JSON.parse(window.localStorage.getItem('userid')!);
  workerList(title: string) {
    this.service
      .getServiceProfiles(title, this.userid, this.location)
      .subscribe((workers) => {
        this.allWorkers = workers;
      });
  }

  serviceExist! : boolean
  subscibeExist!: boolean
  getSubscription() {
    this.subscribe.checkSubsciption(this.userid).subscribe(data => this.subscibeExist = data.success);
  }
  checkSubscription() {
    this.subscribe
      .checkService(this.userid)
      .subscribe((data) => this.serviceExist = data.success);
  }

  goToprofile(workerId: string | null | undefined) {}
}
