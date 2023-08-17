import { Component, OnInit } from '@angular/core';
import { tokenSelector } from '../../userState/auth/auth.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  isAuth$ = this.store.select(tokenSelector);
  constructor(private store:Store){}


ngOnInit(): void {
  
}
}
