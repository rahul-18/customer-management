import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerInfoComponent } from './components/main-pages/customer/customer-follow-up/customer-info/customer-info.component';
import { EditCustomerComponent } from './components/main-pages/customer/customer-follow-up/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/main-pages/customer/list-customer/list-customer.component';
import { OrdersListComponent } from './components/main-pages/orders/orders-list/orders-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-customer', pathMatch: 'full' },
  { path: 'list-customer', component: ListCustomerComponent },
  { path: 'edit-customer/:cId', component: EditCustomerComponent },
  { path: 'customer-info/:cId', component: CustomerInfoComponent },
  { path: 'orders', component: OrdersListComponent },
  // { path: '**', component: ListCustomerComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
