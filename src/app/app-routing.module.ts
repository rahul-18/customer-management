import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCustomerComponent } from './components/main-pages/customer/customer-follow-up/edit-customer/edit-customer.component';
import { ListCustomerComponent } from './components/main-pages/customer/list-customer/list-customer.component';

const routes: Routes = [
  { path: '', component: ListCustomerComponent },
  { path: 'list-customer', component: ListCustomerComponent },
  { path: 'edit-customer/:cId', component: EditCustomerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
