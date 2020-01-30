import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, ParamMap} from '@angular/router';

import {products} from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // Define the product property
  product;

  // inject the ActivatedRoute into the constructor
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // In the ngOnInit() method, subscribe to route params and fetch the product based on the productId.
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.product = products[paramMap.get('productId')];
    });
  }

}
