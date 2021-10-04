import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cm-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
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
  cId

  ngOnInit(): void {
    // param subscription
    // let cId = 0;
    this.route.params.subscribe(p => {
      console.log("param", p);
      this.cId = Number(p.cId)
    })
    // param subscription terminated



    this.customers = JSON.parse(localStorage.getItem('customers'));
    let customer = this.customers[this.cId]
    // this.customerForm.controls['customerName'].setValue(customer.customerName);

    this.customerForm.setValue({
      customerName: customer.customerName,
      gender: customer.gender,
      customerCompName: customer.customerCompName,
      customerCompAdd: customer.customerCompAdd,
      order: customer.order
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
    this._router.navigate(['/list-customer'])
  }

}
