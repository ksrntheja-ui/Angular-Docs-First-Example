import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [{
  path: '', component: ProductListComponent
}, {
  /*Add a route for product-details, with a
  path of products/:productId and
  ProductDetailsComponent for the component.*/
  path: 'products/:productId', component: ProductDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
