import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tokenSelector } from '../../../userState/auth/auth.selector';
import { logout } from '../../../userState/auth/auth.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
mobileNav: boolean = false ;
searchBar: boolean = false;

isAuth$ = this.store.select(tokenSelector)
constructor(private router:Router,private store:Store){}
ngOnInit(): void {
  const token = window.localStorage.getItem('token')
    // this.isAuth = !!token
}

logOut(){
  this.store.dispatch(logout())
  this.router.navigate([''])
}
}
