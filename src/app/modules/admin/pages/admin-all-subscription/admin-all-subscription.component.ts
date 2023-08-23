import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { subscription } from '../../model/subscriptionType';

@Component({
  selector: 'app-admin-all-subscription',
  templateUrl: './admin-all-subscription.component.html',
  styleUrls: ['./admin-all-subscription.component.css'],
})
export class AdminAllSubscriptionComponent implements OnInit {
  @Input() seelist!: boolean;
  @Output('addSub') addSubEmiter = new EventEmitter();
  constructor(private subscibtion: SubscriptionService) {}
  plans!: subscription[];
  seeList() {
    this.addSubEmiter.emit();
  }
  ngOnInit(): void {
    this.allPlans();
  }
  allPlans() {
    this.subscibtion.subscriptionList().subscribe((data) => {
      this.plans = data.plans;
    });
  }
  deleteSubscription() {}
}
