import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private adminAuth:AuthService, private router:Router){}
  loginData = {
    email: '',
    password: ''
  };
isAdmin!:boolean;
  loginSubmit() {
    this.adminAuth.adminLogin(this.loginData).subscribe(data => {
      this.isAdmin = data.admin
      if(this.isAdmin) this.router.navigate(['/admin/dashboard'])
      else this.router.navigate([''])
    })
    console.log('Logging in with:', this.loginData);
  }
}
