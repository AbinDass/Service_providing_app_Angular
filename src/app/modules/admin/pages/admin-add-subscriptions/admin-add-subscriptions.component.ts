import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';

@Component({
  selector: 'app-admin-add-subscriptions',
  templateUrl: './admin-add-subscriptions.component.html',
  styleUrls: ['./admin-add-subscriptions.component.css'],
})
export class AdminAddSubscriptionsComponent {
  constructor(private subscription:SubscriptionService){}
  @Input() seelist!:boolean;
  @Output('seelist') seeListEmitter = new EventEmitter()
  formData = {
    mainHead: '',
    subHead: '',
    plan:'',
    price: 0,
    description: '',
  };
background = ['']
submitForm(){
  this.subscription.addSubscription(this.formData, this.background).subscribe(data=>console.log(data))
}

seeList(){
  this.seeListEmitter.emit()
}
}