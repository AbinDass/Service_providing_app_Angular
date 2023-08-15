import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tokenSelector } from '../../userState/auth/auth.selector';

@Component({
  selector: 'app-loginnavbar',
  templateUrl: './loginnavbar.component.html',
  styleUrls: ['./loginnavbar.component.css']
})
export class LoginnavbarComponent {
  isAuth$ = this.store.select(tokenSelector)
  constructor(private store:Store){}

}
