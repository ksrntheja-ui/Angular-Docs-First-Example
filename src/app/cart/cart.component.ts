import {Component, OnInit} from '@angular/core';

import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Define the items property to store the products in the cart.
  items;

  constructor(
    // Inject the CartService to manage cart information.
    private cartService: CartService
  ) {
  }

  ngOnInit() {
  }

}
