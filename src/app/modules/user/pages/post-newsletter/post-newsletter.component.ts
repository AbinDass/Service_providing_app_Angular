import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tokenSelector } from '../../userState/auth/auth.selector';

@Component({
  selector: 'app-post-newsletter',
  templateUrl: './post-newsletter.component.html',
  styleUrls: ['./post-newsletter.component.css']
})
export class PostNewsletterComponent {
  constructor(private store:Store){}
  isAuth$ = this.store.select(tokenSelector);

}
