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

const routes: Routes = [
  {
    path:"", component:UserComponent,children:[
      { path:'',component:LandingComponent},
      { path:'signin', component:SigninComponent},
      { path:'signup', component:SignupComponent},
      { path:'nearbyservices', component:ServicesComponent},
      { path:'servicelist/:servicename', component:ServiceprofileComponent},
      { path:'profile/:userprofile', component:ProfileComponent,},
      {path:'posts', component:PostsComponent},
      {path:'**', component:ErrorComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
