import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from './pages/layout/navbar/navbar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SearchComponent } from './pages/layout/search/search.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    LandingComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxTypedJsModule,
    FontAwesomeModule,
  ]
})
export class UserModule { }
