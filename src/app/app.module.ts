import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import {ShippingComponent} from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent, // ng generate component top-bar
    ProductListComponent, // ng generate component product-list
    ProductAlertsComponent, // ng generate component product-alerts
    ProductDetailsComponent, // ng generate component product-details
    CartComponent, // ng generate component cart
    ShippingComponent // ng generate component shipping
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

/*
The app now has a product list and sharing feature.
In the process, you've learned to use five common features of Angular's template syntax:

      *ngFor
      *ngIf
      Interpolation {{ }}
      Property binding [ ]
      Event binding ( )
*/

/*
The routerLink defines how the user
navigates to the route (or URL) declaratively in the component template.

The ActivatedRoute is specific to each routed component loaded by the Angular Router.
It contains information about the route, its parameters, and additional data associated with the route.
*/
