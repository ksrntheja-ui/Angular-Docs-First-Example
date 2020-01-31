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
  }

}
