import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {


  /*
  In the ProductAlertsComponent class definition, define a
    property named product with an @Input() decorator.

  The @Input() decorator indicates that the
    property value
    passes in from the component's' +
    'parent,' +
    'the product list component.
   */

  /*
  The new product alert component takes a product as
    input from the product list.
    With that input, it shows or hides the "Notify Me" button, based on the price of the product.
  */

  @Input()
  product;

  constructor() {
  }

  ngOnInit() {
  }

}
