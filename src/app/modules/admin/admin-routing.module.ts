import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboadComponent } from './pages/dashboad/dashboad.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    {path:'', component:LoginComponent},
    {path:'dashboard', component:DashboadComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
