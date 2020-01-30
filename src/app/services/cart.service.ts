import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Define an items property to store the list (array) of the current products in the cart.
  items = [];

  constructor() {
  }
}
