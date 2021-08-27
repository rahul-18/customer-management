import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from '../components/main-pages/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from '../components/main-pages/customer/customer-follow-up/create-customer/create-customer.component';
import { MainNavComponent } from '../components/shared-comp/main-nav/main-nav.component';



@NgModule({
  declarations: [ListCustomerComponent, CreateCustomerComponent, MainNavComponent],
  imports: [
    CommonModule
  ]
})
export class MainAppModuleModule { }
