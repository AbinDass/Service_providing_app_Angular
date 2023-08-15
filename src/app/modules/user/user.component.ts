import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { autologin } from './userState/auth/auth.action';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private store:Store){}
ngOnInit(): void {
  this.store.dispatch(autologin())
}
}
