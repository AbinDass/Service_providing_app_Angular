import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from '../../services/subscription.service';
import { plans } from '../../model/subscriptionType';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userDataSelector } from '../../userState/auth/auth.selector';
import { environment } from 'src/environments/environment.development';
declare var Razorpay: any;

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent implements OnInit {
  constructor(
    private subscribtion: SubscriptionService,
    private router: Router,
    private store: Store
  ) {}
  plans!: plans[];
  userid: string = JSON.parse(window.localStorage.getItem('userid')!);
  
  orderId: string = '';
  notify: boolean = false;
 
  user = this.store.select(userDataSelector);
  options = {
    item: '',
    key: environment.RAZORPAY_KEY,
    amount: '',
    currency: 'INR',
    name: '',
    description: 'Test Transaction',
    image: '/logo.svg',
    order_id: '',
    handler:(response: any) => {
      console.log(response,'object');
      const razorpay_payment_id = response.razorpay_payment_id;
      const razorpay_order_id = response.razorpay_order_id;
      const razorpay_signature = response.razorpay_signature;
      this.subscribtion.verifyPayment(
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        this.userid,
        this.options.item
      )
    },
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
  };

  verify() {}

  ngOnInit(): void {
    this.getSubscriptions();
  }
  getSubscriptions() {
    this.subscribtion.getPlans().subscribe((data) => {
      console.log(data);
      this.plans = data.plans;
    });
  }
  subscribeHere(planid: string) {
    this.options.item = planid;
    this.subscribtion
      .takeSubscription(planid, this.userid)
      .subscribe((response) => {
        console.log(response, 'vannuu');
        if(response.message){
          this.notify = true;
          if(this.notify) alert('already you got your subscription')
          return
        }
        const razoramount = response.response.subscibtiondata.amount;
        this.options.order_id = response.response.id;
        this.options.amount = razoramount;
       ;

        this.user.subscribe((data) => {
          this.options.name = data.firstname;
          this.options.prefill.email = data.email;
          this.options.prefill.contact = data.phone;
          console.log(this.options.amount,this.options.item,this.options.name,this.options.order_id,this.options.handler)
          const rzp = new Razorpay(this.options);
          rzp.open();
        });
        this.router.navigate(['nearbyservices'])
      });
    console.log('clicked here');
  }
}
