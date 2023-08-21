import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { Store } from '@ngrx/store';
import { tokenSelector } from '../../userState/auth/auth.selector';

@Component({
  selector: 'app-subscribe-notify',
  templateUrl: './subscribe-notify.component.html',
  styleUrls: ['./subscribe-notify.component.css']
})
export class SubscribeNotifyComponent implements OnInit{
constructor(private subscribe:SubscriptionService, private store:Store){}
userid: string = JSON.parse(window.localStorage.getItem('userid')!);
isAuth$ = this.store.select(tokenSelector);


ngOnInit(): void {
  
}

}
