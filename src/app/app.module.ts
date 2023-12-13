import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "home", component: HomeComponent, title: "Home | Ecomzy"},
      {path: "cart", component: CartComponent, title: "Cart | Ecomzy"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
