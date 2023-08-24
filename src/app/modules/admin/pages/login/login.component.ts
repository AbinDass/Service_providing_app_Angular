import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private ngUnsubscribe = new Subject<void>();
  constructor(private adminAuth:AuthService, private router:Router){}
  loginData = {
    email: '',
    password: ''
  };
isAdmin!:boolean;
  loginSubmit() {
    this.adminAuth.adminLogin(this.loginData)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(data => {
      this.isAdmin = data.admin
      if(this.isAdmin) this.router.navigate(['/admin/dashboard'])
      else this.router.navigate([''])
    })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
