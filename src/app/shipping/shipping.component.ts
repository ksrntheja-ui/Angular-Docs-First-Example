import {Component, OnInit} from '@angular/core';

import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  // Define a shippingCosts property.
  shippingCosts;

  constructor(
    // Inject cart service
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    // Set the shippingCosts property using the getShippingPrices() method from cart service.
    // this.shippingCosts = this.cartService.getShippingPrices();
    this.shippingCosts = this.cartService.getShippingPrices();
    /*
    this.cartService.getShippingPrices().subscribe(data => {
      this.shippingCosts = data;
      console.log(data);
    });
    if (this.shippingCosts) {
      console.log('Log' + this.shippingCosts);
    }
    */
  }

  /*
  clickButton() {
    console.log(this.shippingCosts[1]);
  }
  */

}
