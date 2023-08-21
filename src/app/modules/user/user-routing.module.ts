import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceprofileComponent } from './pages/serviceprofile/serviceprofile.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ErrorComponent } from './pages/error/error.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { ControlpanelComponent } from './pages/controlpanel/controlpanel.component';
import { LoginalertComponent } from './pages/loginalert/loginalert.component';
import { authGuard, signGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'signin',canActivate:[signGuard], component: SigninComponent },
      { path: 'signup',canActivate:[signGuard], component: SignupComponent },
      { path: 'nearbyservices', component: ServicesComponent },
      { path: 'servicelist/:servicename', component: ServiceprofileComponent },
      {
        path: 'profile/:userprofile',
        canActivate: [authGuard],
        component: ProfileComponent,
      },
      { path: 'posts', component: PostsComponent },
      {
        path: 'subscription',
        canActivate: [authGuard],
        component: SubscribeComponent,
      },
      {
        path: 'controlpanel',
        canActivate: [authGuard],
        component: ControlpanelComponent,
      },
      { path: 'loginalert', component: LoginalertComponent },
      { path: '**', component: ErrorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
