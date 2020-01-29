import {Component, OnInit} from '@angular/core';

import {products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor() {
  }

  ngOnInit() {
  }

  share() {
    window.alert('The product has been shared');
  }

  /*
  Define the behavior that should happen when the user
    clicks the "Notify Me" button.
    Recall that it's the parent, product
    list
    component—
    not the product
    alerts
    component—that acts when the
    child raises the
    event.
    */

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
