import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
declare var $: any;

@Component({
  selector: 'cm-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  customerForm = new FormGroup({
    customerName: new FormControl(''),
    gender: new FormControl(''),
    customerCompName: new FormControl(''),
    customerCompAdd: new FormControl(''),
    order: new FormControl([])
  });

  customers = [];

  ngOnInit(): void {
    if (localStorage.getItem('customers') && localStorage.getItem('customers').length !== 0) {
      this.customers = JSON.parse(localStorage.getItem('customers'));
    } else {
      localStorage.setItem('customers', JSON.stringify([]));
    }
  }

  //   submitForm(formData: any, formDirective: FormGroupDirective): void {
  //     formDirective.resetForm();
  //     this.myForm.reset();
  // }

  onSubmit() {
    let customer =
    {
      customerName: this.customerForm.value.customerName,
      gender: this.customerForm.value.gender,
      customerCompName: this.customerForm.value.customerCompName,
      customerCompAdd: this.customerForm.value.customerCompAdd,
      order: []
    }
    console.log(customer);
    this.customers.push(customer);
    localStorage.removeItem('customers');
    localStorage.setItem('customers', JSON.stringify(this.customers));
    this.customerForm.reset();
    $('#myTab a[href="#card"]').tab('show')
  }
  editCustomer(i, ev) {
    ev.stopPropagation();
    console.log("route to edit customer");
    this._router.navigate(['/edit-customer', i])
  }
  showCustomerInfo(i) {
    console.log("route to edit customer");
    this._router.navigate(['/customer-info', i])
  }
  removeCustomer(i, ev) {
    ev.stopPropagation();

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this customer!",
      icon: "warning",
      buttons: ['Cancel', 'Remove it'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.customers.splice(i, 1);
          localStorage.removeItem('customers');
          localStorage.setItem('customers', JSON.stringify(this.customers));
          swal("Your Customer has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your customer is safe!");
        }
      });
  }

}
