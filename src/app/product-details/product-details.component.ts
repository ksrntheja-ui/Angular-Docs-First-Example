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

  /*
  ngOnInit() {
    console.log(this.activatedRoute.params);
    console.log(this.activatedRoute.paramMap);
    // console.log(this.activatedRoute.paramMap.get('productId'));
    // Property 'get' does not exist on type 'Observable<ParamMap>'.
    this.activatedRoute.paramMap.subscribe(paramMap => {
      console.log(paramMap);
      this.product = products[paramMap.get('productId')];
    });
  }
   */


  // Remove braces around arrow function body
  /*
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => this.product = products[paramMap.get('productId')]);
  }
  */


  // Specify type explicitly
  /*
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.product = products[paramMap.get('productId')];
    });
  }
  */


  // Propagate to destructuring declaration
  /*
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(({get}) => {
      this.product = products[get('productId')];
    });
  }
   */

  // Introduce local variable - let
  // TSLint: Identifier 'next' is never reassigned; use 'const' instead of 'let'.(prefer-const)
  /*
  ngOnInit() {
    let next = params => {
      this.product = products[+params.get('productId')];
    };
    this.activatedRoute.paramMap.subscribe(next);
  }
   */


  // Introduce local variable - var
  // TSLint: Forbidden 'var' keyword, use 'let' or 'const' instead(no-var-keyword)
  // TSLint: Identifier 'next' is never reassigned; use 'const' instead of 'var'.(prefer-const)
  /*
  ngOnInit() {
    var next = params => {
      this.product = products[+params.get('productId')];
    };
    this.activatedRoute.paramMap.subscribe(next);
  }
   */

  // Introduce local variable - const
  /*
  ngOnInit() {
    const next = params => {
      this.product = products[+params.get('productId')];
    };
    this.activatedRoute.paramMap.subscribe(next);
  }
   */


  // convert to a named function
  /*
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(getProduct);

    function getProduct(params) {
      this.product = products[+params.get('productId')];
    }
  }
   */

}
