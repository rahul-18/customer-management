import { Component, OnInit } from '@angular/core';
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
  }

}
