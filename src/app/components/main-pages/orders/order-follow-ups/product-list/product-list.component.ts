import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Output() product = new EventEmitter<object>();
  @Output() back = new EventEmitter<boolean>();
  constructor(
    private _http: HttpClient
  ) { }
  prodList;

  ngOnInit(): void {
    this._http.get('./../../../../../../assets/json/product.json').subscribe((d: any) => {
      this.prodList = d;
      console.log('product list -----------------', d)
    },
      (err: any) => {
        alert(err);
      })
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
  addToOrder(mainInd, categoryInd, product) {
    this.product.emit(product);
  }
  backClick() {
    this.back.emit(false)
  }
}
