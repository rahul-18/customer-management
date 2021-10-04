import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cm-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  customerForm = new FormGroup({
    customerName: new FormControl(''),
    gender: new FormControl(''),
    customerCompName: new FormControl(''),
    customerCompAdd: new FormControl(''),
    order: new FormControl([])
  });

  customers = [];
  cId;
  customer;

  ngOnInit(): void {
    // param subscription
    this.route.params.subscribe(p => {
      console.log("param", p);
      this.cId = Number(p.cId)
    })
    // param subscription terminated



    this.customers = JSON.parse(localStorage.getItem('customers'));
    this.customer = this.customers[this.cId]


    this.customerForm.setValue({
      customerName: this.customer.customerName,
      gender: this.customer.gender,
      customerCompName: this.customer.customerCompName,
      customerCompAdd: this.customer.customerCompAdd,
      order: this.customers[this.cId].order
    });
  }

  onSubmit() {

    let customer =
    {
      customerName: this.customerForm.value.customerName,
      gender: this.customerForm.value.gender,
      customerCompName: this.customerForm.value.customerCompName,
      customerCompAdd: this.customerForm.value.customerCompAdd,
      order: this.customers[this.cId].order
    }
    console.log(customer);
    this.customers.splice(this.cId, 1, customer);
    localStorage.removeItem('customers');
    localStorage.setItem('customers', JSON.stringify(this.customers));
    // this._router.navigate(['/list-customer'])
  }

}
