import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-subscribe-notify',
  templateUrl: './subscribe-notify.component.html',
  styleUrls: ['./subscribe-notify.component.css']
})
export class SubscribeNotifyComponent implements OnInit{
constructor(private subscribe:SubscriptionService){}
userid: string = JSON.parse(window.localStorage.getItem('userid')!);
ngOnInit(): void {
  
}

}
