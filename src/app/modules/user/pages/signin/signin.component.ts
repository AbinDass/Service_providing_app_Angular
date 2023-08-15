import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';
import { Store } from '@ngrx/store';
import { appStateInterface } from 'src/app/appStore/appstate';
import { loginRequested } from '../../userState/auth/auth.action';
import {
  idSelector,
  tokenSelector,
  userData,
} from '../../userState/auth/auth.selector';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  signinSubmit() {
    if (this.signinForm.valid) {
      const email = this.signinForm.value.email;
      const password = this.signinForm.value.password;
      if (email && password) {
        this.store.dispatch(loginRequested({ email, password }));
      }
    }
  }

  constructor(
    private userAuth: UserAuthService,
    private store: Store<appStateInterface>
  ) {
    store.select(tokenSelector).subscribe((token) => {
      window.localStorage.setItem('token', token);
    });
    store.select(idSelector).subscribe((id) => {
      window.localStorage.setItem('userid', JSON.stringify(id));
    });
    store.select(userData).subscribe((data) => {
      const newData = JSON.stringify(data);
      window.localStorage.setItem('user', newData);
    });

    // window.localStorage.setItem('userid', this.userid)
  }

  ngOnInit() {}
  inputs = [
    {
      inputId: 'email',
      inputType: 'email',
      labelName: 'Email address',
      inputPlaceHolder: 'leroy@jenkins.com',
    },
    {
      inputId: 'password',
      inputType: 'password',
      labelName: 'Password',
      inputPlaceHolder: '********',
    },
  ];
}
