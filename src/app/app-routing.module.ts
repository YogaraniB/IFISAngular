import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmplyeeDetailListComponent } from './emplyee-detail-list/emplyee-detail-list.component';
import { EmployeeParentComponent } from './employee-parent/employee-parent.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DailyTasksComponent } from './daily-tasks/daily-tasks.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BugsComponent } from './bugs/bugs.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { TrasportListComponent } from './trasport-list/trasport-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  { path: 'register', component: RegisterDetailsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: EmplyeeDetailListComponent },
  { path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'tasks', component: DailyTasksComponent},
  {path:'stocks',component: TicketsComponent},
  {path:'user', component:EmployeeParentComponent},
  {path:'bugs', component:BugsComponent},
  {path:'farmer', component:FarmerListComponent},
  {path:'customer', component:CustomerListComponent},
  {path:'vendor', component:VendorListComponent},
  {path:'transport', component:TrasportListComponent},
  {path:'service', component:ServiceComponent},
  {path:'order', component:OrderComponent},
  {path:'**', redirectTo:'/home'}
];
imports: [ RouterModule.forRoot(routes) ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
