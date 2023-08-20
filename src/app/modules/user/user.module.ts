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
import { PostsComponent } from './pages/posts/posts.component';
import { PostSidebarComponent } from './pages/post-sidebar/post-sidebar.component';
import { PostSingleComponent } from './pages/post-single/post-single.component';
import { PostAddCommentboxComponent } from './pages/post-add-commentbox/post-add-commentbox.component';
import { PostCommentboxComponent } from './pages/post-commentbox/post-commentbox.component';
import { PostAddComponent } from './pages/post-add/post-add.component';
import { PostNewsletterComponent } from './pages/post-newsletter/post-newsletter.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginalertComponent } from './pages/loginalert/loginalert.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { SubscribeNotifyComponent } from './pages/subscribe-notify/subscribe-notify.component';
import { ReduceLengthPipe } from 'src/app/pipes/reduce-length.pipe';
import { ProfileEditComponent } from './pages/profile-edit/profile-edit.component';

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
    MapboxinputComponent,
    PostsComponent,
    PostSidebarComponent,
    PostSingleComponent,
    PostAddCommentboxComponent,
    PostCommentboxComponent,
    PostAddComponent,
    PostNewsletterComponent,
    ErrorComponent,
    LoginalertComponent,
    SubscribeComponent,
    SubscribeNotifyComponent,
    ReduceLengthPipe,
    ProfileEditComponent,

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
