import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appStateInterface } from 'src/app/appStore/appstate';
import { signUpRequested } from '../../userState/auth/auth.action';
import { idSelector, tokenSelector } from '../../userState/auth/auth.selector';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = new FormGroup({
    firstname: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(2),
    ]),
    secondname: new FormControl('',[
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(2),
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern('^[0-9]{10}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  signupSubmit(){
    if(this.signupForm.valid){
        let firstname = this.signupForm.value.firstname
        let secondname = this.signupForm.value.secondname
        let email = this.signupForm.value.email
        let phone = this.signupForm.value.phone
        let password = this.signupForm.value.password
        let confirmpassword = this.signupForm.value.confirmpassword
      
        this.store.dispatch(signUpRequested({ firstname, secondname, email,phone,password, confirmpassword,profilepicture:[]}));
      
    }
  }
constructor(private store:Store<appStateInterface>){
  store.select(tokenSelector).subscribe((token) => {
    window.localStorage.setItem('token', token)
  })
  store.select(idSelector).subscribe((id) => {
    window.localStorage.setItem('userid', JSON.stringify(id))
  })
}

inputBoxFirst = [
  {
    inputId: 'firstname',
    inputType: 'text',
    labelName: 'firstname',
    inputPlaceHolder: 'firstname'
  },
  {
    inputId: 'secondname',
    inputType: 'text',
    labelName: 'secondname',
    inputPlaceHolder: 'secondname'
  },
  {
    inputId: 'email',
    inputType: 'email',
    labelName: 'Email address',
    inputPlaceHolder: 'leroy@jenkins.com'
  },
]

inputBoxSecond = [
  {
    inputId: 'phone',
    inputType: 'number',
    labelName: 'Mobile Number',
    inputPlaceHolder: '+91 ****3210'
  },
  {
    inputId: 'password',
    inputType: 'password',
    labelName: 'Password',
    inputPlaceHolder: '********'
  },
  {
    inputId: 'confirmpassword',
    inputType: 'password',
    labelName: 'confirm Password',
    inputPlaceHolder: '********'
  }
]
}
