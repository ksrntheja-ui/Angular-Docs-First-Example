import {Component, OnInit} from '@angular/core';

import {CartService} from '../services/cart.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Define the items property to store the products in the cart.
  items;

  // Define the checkoutForm property to store the form model.
  checkoutForm;

  constructor(
    // Inject the CartService to manage cart information.
    private cartService: CartService,
    // Angular's FormBuilder service provides convenient methods for generating controls.
    private formBuilder: FormBuilder // ERROR Error: "Uncaught (in promise): NullInjectorError:
    // StaticInjectorError(AppModule)[CartComponent -> FormBuilder]:
  ) {
  }

  ngOnInit() {
    // Set the items using the cart service's getItems() method
    this.items = this.cartService.getItems();
  }

}
