import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmplyeeDetailListComponent } from './emplyee-detail-list/emplyee-detail-list.component';
import { EmployeeParentComponent } from './employee-parent/employee-parent.component';
import { EmploreeDetailService } from './Shared/emploree-detail.service';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {enableProdMode} from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DailyTasksComponent } from './daily-tasks/daily-tasks.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BugsComponent } from './bugs/bugs.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { FarmerDetailsListComponent } from './farmer-details-list/farmer-details-list.component';
import { RegisterDetailsComponent } from './register-details/register-details.component';
import { FarmerListComponent } from './farmer-list/farmer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetailListComponent } from './customer-detail-list/customer-detail-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { VendorDetailListComponent } from './vendor-detail-list/vendor-detail-list.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { TrasportDetailComponent } from './trasport-detail/trasport-detail.component';
import { TrasportDetailListComponent } from './trasport-detail-list/trasport-detail-list.component';
import { TrasportListComponent } from './trasport-list/trasport-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceComponent } from './service/service.component';
import { OrderComponent } from './order/order.component';

const appRoutes: Routes = [
   { path: 'EmployeeDetailsComponent', component: EmployeeDetailsComponent },
   { path: 'EmplyeeDetailListComponent', component: EmplyeeDetailListComponent },
];
 
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,           
    EmplyeeDetailListComponent,
    EmployeeParentComponent,
    HomeComponent,
    LoginComponent,
    DailyTasksComponent,
    TicketsComponent,
    BugsComponent,
    FarmerDetailsComponent,
    FarmerDetailsListComponent,
    RegisterDetailsComponent,
    FarmerListComponent,
    CustomerDetailComponent,
    CustomerDetailListComponent,
    CustomerListComponent,
    VendorDetailComponent,
    VendorDetailListComponent,
    VendorListComponent,
    TrasportDetailComponent,
    TrasportDetailListComponent,
    TrasportListComponent,
    DashboardComponent,
    ServiceComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmploreeDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
