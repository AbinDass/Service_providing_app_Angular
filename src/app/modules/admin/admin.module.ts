import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './pages/layout/navbar/navbar.component';
import { DashboadComponent } from './pages/dashboad/dashboad.component';
import { AdminSidebarComponent } from './pages/admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminSubscriptionsComponent } from './pages/admin-subscriptions/admin-subscriptions.component';
import { AdminUsersComponent } from './pages/admin-users/admin-users.component';
import { AdminWorkersComponent } from './pages/admin-workers/admin-workers.component';
import { AdminServicesComponent } from './pages/admin-services/admin-services.component';
import { AdminAddSubscriptionsComponent } from './pages/admin-add-subscriptions/admin-add-subscriptions.component';
import { AdminAllSubscriptionComponent } from './pages/admin-all-subscription/admin-all-subscription.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboadComponent,
    NavbarComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    AdminSubscriptionsComponent,
    AdminUsersComponent,
    AdminWorkersComponent,
    AdminServicesComponent,
    AdminAddSubscriptionsComponent,
    AdminAllSubscriptionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
