import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tokenSelector, userDataSelector } from '../../../userState/auth/auth.selector';
import { logout } from '../../../userState/auth/auth.action';
import { NearbyservicesService } from '../../../services/nearbyservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  mobileNav: boolean = false;
  searchBar: boolean = false;
  choosedDistrict!: string;
  showmodal: boolean = false;
  admin!:boolean
  isAuth$ = this.store.select(tokenSelector);
  isAdmin$ = this.store.select(userDataSelector);
  userid = JSON.parse(window.localStorage.getItem('userid')!);
  constructor(
    private router: Router,
    private store: Store,
    private service: NearbyservicesService
  ) {}
  district(district: string,) {
    this.service.locationSubject$.next(district);
    this.showmodal = !this.showmodal;
  }
  ngOnInit(): void {
    const token = window.localStorage.getItem('token');
    // this.isAuth = !!token
    this.isAdmin$.subscribe(data => this.admin = data.isAdmin)
    this.service.locationSubject$.subscribe((val) => {
      this.choosedDistrict = val;
    });
  }

  logOut() {
    this.store.dispatch(logout());
    this.router.navigate(['']);
  }
  close(){
    this.showmodal=!this.showmodal
  }
}
