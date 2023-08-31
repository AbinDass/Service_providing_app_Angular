import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { subscription } from '../model/subscriptionType';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  baseurl: string = 'https://social-expo.onrender.com/admin';
  constructor(private http: HttpClient) {}
  addSubscription(
    data: {
      mainHead: string;
      subHead: string;
      plan: string;
      price: number;
      description: string;
    },
    background: string[]
  ) {
    return this.http.post(this.baseurl + '/addsubscription', {
      data,
      background,
    });
  }
  subscriptionList() {
    return this.http.get<{ plans: subscription[] }>(
      this.baseurl + `/subscriptions`
    );
  }
}
