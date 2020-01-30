import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from '@angular/router';

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
  }

}
