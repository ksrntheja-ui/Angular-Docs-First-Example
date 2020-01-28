import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  /*
  To make the "Notify Me" button work, you need to configure two things:

  -> the product
    alert
    component to
    emit an event
    when the user
    clicks "Notify Me".
  -> the product
    list
    component to
    act on
    that event
   */

  /*
  In the component class, define a
    property named
    notify with an
    @Output() decorator and an
    instance of EventEmitter().

  This allows the product
    alert
    component to
    emit an
    event when the
    value of the notify property changes.
  */

  @Output()
  notify = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
