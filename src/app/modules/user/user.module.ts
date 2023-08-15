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
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InputboxComponent } from './pages/inputbox/inputbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { authEffects } from './userState/auth/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './userState/auth/auth.reducer';
import { ServicesComponent } from './pages/services/services.component';
import { LoginnavbarComponent } from './pages/loginnavbar/loginnavbar.component';
import { ServiceprofileComponent } from './pages/serviceprofile/serviceprofile.component';
import { ChooselocationComponent } from './pages/chooselocation/chooselocation.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddServiceComponent } from './pages/add-service/add-service.component';
import { BannerComponent } from './pages/banner/banner.component';
import { MapboxinputComponent } from './pages/mapboxinput/mapboxinput.component';

@NgModule({
  declarations: [
    UserComponent,
    NavbarComponent,
    LandingComponent,
    SearchComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    InputboxComponent,
    ServicesComponent,
    LoginnavbarComponent,
    ServiceprofileComponent,
    ChooselocationComponent,
    ProfileComponent,
    AddServiceComponent,
    BannerComponent,
    MapboxinputComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxTypedJsModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('userAuthentication', authReducer),
    EffectsModule.forFeature([authEffects])
  ]
})
export class UserModule { }
