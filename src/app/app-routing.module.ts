import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {ShippingComponent} from './shipping/shipping.component';

const routes: Routes = [{
  path: '', component: ProductListComponent
}, {
  /*Add a route for product-details, with a
  path of products/:productId and
  ProductDetailsComponent for the component.*/
  path: 'products/:productId', component: ProductDetailsComponent
}, {
  // Add routing (a URL pattern) for the cart component
  path: 'cart', component: CartComponent
}, {
  // Add a route for shipping
  path: 'shipping', component: ShippingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
