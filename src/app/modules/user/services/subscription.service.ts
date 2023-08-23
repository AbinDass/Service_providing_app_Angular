import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { payment, plans } from '../model/subscriptionType';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private http: HttpClient) {}
  baseurlAdmin: string = 'http://localhost:8000/admin';
  baseurl: string = 'http://localhost:8000/api';

  getPlans() {
    return this.http.get<{ plans: plans[] }>(
      this.baseurlAdmin + '/subscriptions'
    );
  }
  takeSubscription(subId: string, userId: string): Observable<any> {
    return this.http.post<payment>(this.baseurl + '/takesubscription', {
      subId,
      userId,
    });
  }

  verifyPayment(
    razorpay_payment_id: string,
    razorpay_order_id: string,
    razorpay_signature: any,
    userId: string,
    subId: string
  ) {
     this.http.post(this.baseurl+'/verfypayment',{
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      userId,
      subId,
    }
    ).subscribe(data => console.log(data))
  }

  checkService(userid:string|null){
   return this.http.get<{success:boolean}>(this.baseurl+`/checkServiceadded?userId=${userid}`)
  }

  checkSubsciption(userid:string|null){
   return this.http.get<{success:boolean}>(this.baseurl+`/checkSubscription?userId=${userid}`)
  }
}
