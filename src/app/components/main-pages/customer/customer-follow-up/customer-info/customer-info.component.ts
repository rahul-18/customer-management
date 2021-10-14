import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';

@Component({
  selector: 'cm-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private _http: HttpClient
  ) { }
  customerForm = new FormGroup({
    customerName: new FormControl(''),
    gender: new FormControl(''),
    customerCompName: new FormControl(''),
    customerCompAdd: new FormControl(''),
    order: new FormControl([])
  });

  customers = [];
  prodList = [];
  cId;
  customer;

  ngOnInit(): void {
    this.getProdJson();
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
  getProdJson() {
    this._http.get('./../../../../../../assets/json/product.json').subscribe((d: any) => {
      console.log("product json : ----", d);
      this.prodList = d
    }, (err: any) => {
      console.error("product json error: ----", err);
    })
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
    window.location.reload();
    // this._router.navigate(['/list-customer'])
  }
  getStarRating(num) {
    let numArr = [];
    // if(numArr.length === num){
    //   return numArr
    // }
    for (let index = 0; index < num; index++) {
      numArr.push(index)
    }
    return numArr;
  }
  addToOrder(mainInd, insideInd, prodInfo) {
    this.customers[this.cId].order.push(prodInfo);
    localStorage.removeItem('customers');
    localStorage.setItem('customers', JSON.stringify(this.customers));
    swal("Congratulations!", "Product has been added to order", "success");
  }
  getGrandTotal(allOrders) {
    let total = 0;
    for (let index = 0; index < allOrders.length; index++) {
      total = total + allOrders[index].prodPrice;
    }
    return total;
  }
  removeOrder(ind) {
    swal({
      title: "Are you sure?",
      // text: "Once deleted, you will not be able to recover this customer!",
      icon: "warning",
      buttons: ['Cancel', 'Remove it'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.customers[this.cId].order.splice(ind, 1);
          localStorage.removeItem('customers');
          localStorage.setItem('customers', JSON.stringify(this.customers));
          swal("Your order has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your order is safe!");
        }
      });
  }

}
