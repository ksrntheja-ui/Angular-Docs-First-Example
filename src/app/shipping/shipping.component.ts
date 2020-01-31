import {Component, OnInit} from '@angular/core';

import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(
    // Inject cart service
    private cartService: CartService
  ) {
  }

  ngOnInit() {
  }

}