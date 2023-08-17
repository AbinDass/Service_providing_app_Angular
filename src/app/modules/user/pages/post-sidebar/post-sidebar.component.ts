import { Component } from '@angular/core';
import { tokenSelector } from '../../userState/auth/auth.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-sidebar',
  templateUrl: './post-sidebar.component.html',
  styleUrls: ['./post-sidebar.component.css']
})
export class PostSidebarComponent {
  isAuth$ = this.store.select(tokenSelector);
  constructor(private store:Store){}

}
