import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'cm-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  constructor() { }

  customerForm = new FormGroup({
    customerName: new FormControl(''),
    gender: new FormControl(''),
    customerCompName: new FormControl(''),
    customerCompAdd: new FormControl(''),
  });

  customers = [];

  ngOnInit(): void {
    if (localStorage.getItem('customers') && localStorage.getItem('customers').length !== 0) {
      this.customers = JSON.parse(localStorage.getItem('customers'));
    } else {
      localStorage.setItem('customers', JSON.stringify([]));

    }
  }

  onSubmit() {
    let customer =
    {
      customerName: this.customerForm.value.customerName,
      gender: this.customerForm.value.gender,
      customerCompName: this.customerForm.value.customerCompName,
      customerCompAdd: this.customerForm.value.customerCompAdd,
    }
    console.log(customer);
    this.customers.push(customer);
    localStorage.removeItem('customers');
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }
}
