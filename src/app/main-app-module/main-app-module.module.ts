import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListCustomerComponent } from '../components/main-pages/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from '../components/main-pages/customer/customer-follow-up/create-customer/create-customer.component';
import { MainNavComponent } from '../components/shared-comp/main-nav/main-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCustomerComponent } from '../components/main-pages/customer/customer-follow-up/edit-customer/edit-customer.component';
import { CustomerInfoComponent } from '../components/main-pages/customer/customer-follow-up/customer-info/customer-info.component';
import { OrdersListComponent } from '../components/main-pages/orders/orders-list/orders-list.component';
import { ProductListComponent } from '../components/main-pages/orders/order-follow-ups/product-list/product-list.component';



@NgModule({
  declarations: [ListCustomerComponent, CreateCustomerComponent, MainNavComponent, EditCustomerComponent, CustomerInfoComponent, OrdersListComponent, ProductListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class MainAppModuleModule { }
