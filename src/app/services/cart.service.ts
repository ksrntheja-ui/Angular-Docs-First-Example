import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Define an items property to store the list (array) of the current products in the cart.
  items = [];

  constructor() {
  }

  // Define method to add items to the cart
  addToCart(product) {
    this.items.push(product);
  }

  // Define method to return cart items
  getItems() {
    return this.items;
  }

  // Define method to clear the cart items
  clearCart() {
    this.items = [];
    return this.items;
  }

}
