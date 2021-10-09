import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'cm-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  customers = [];
  cId;
  productPage: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('customers') && localStorage.getItem('customers').length !== 0) {
      this.customers = JSON.parse(localStorage.getItem('customers'));
    } else {
      localStorage.setItem('customers', JSON.stringify([]));
    }
  }
  getGrandTotal(allOrders) {
    let total = 0;
    for (let index = 0; index < allOrders.length; index++) {
      total = total + allOrders[index].prodPrice;
    }
    return total;
  }
  routeToOrder(i) {
    this.cId = i;
    this.productPage = true;
  }
  addOrderToCustomer(product) {
    this.customers[this.cId].order.push(product);
    localStorage.removeItem('customers');
    localStorage.setItem('customers', JSON.stringify(this.customers));
    swal("Congratulations!", "Product has been added to order", "success");
  }
  backToList(ev) {
    this.productPage = ev;
  }
}
