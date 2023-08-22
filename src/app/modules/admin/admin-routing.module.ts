import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboadComponent } from './pages/dashboad/dashboad.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminSubscriptionsComponent } from './pages/admin-subscriptions/admin-subscriptions.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminWorkersComponent } from './pages/admin-workers/admin-workers.component';
import { AdminServicesComponent } from './pages/admin-services/admin-services.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    {path:'', component:LoginComponent},
    {path:'dashboard', component:DashboadComponent,children:[
      {path:'',component:AdminDashboardComponent},
      {path:'subscription',component:AdminSubscriptionsComponent},
      {path:'users',component:AdminUsersComponent},
      {path:'workers',component:AdminWorkersComponent},
      {path:'services',component:AdminServicesComponent},
    ]},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
