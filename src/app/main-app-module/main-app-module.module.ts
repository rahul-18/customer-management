import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from '../components/main-pages/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from '../components/main-pages/customer/customer-follow-up/create-customer/create-customer.component';
import { MainNavComponent } from '../components/shared-comp/main-nav/main-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from '../components/main-pages/customer/customer-follow-up/edit-customer/edit-customer.component';
import { CustomerInfoComponent } from '../components/main-pages/customer/customer-follow-up/customer-info/customer-info.component';



@NgModule({
  declarations: [ListCustomerComponent, CreateCustomerComponent, MainNavComponent, EditCustomerComponent, CustomerInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MainAppModuleModule { }
