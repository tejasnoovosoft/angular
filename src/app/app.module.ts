import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './cart/cart.component';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {TestComponent} from './test/test.component';
import {FormsModule} from "@angular/forms";
import {CartService} from "./cart.service";
import { ClassstylebindingComponent } from './classstylebinding/classstylebinding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    TestComponent,
    ClassstylebindingComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent, title: "Home | Ecomzy"},
      {path: "home", component: HomeComponent, title: "Home | Ecomzy"},
      {path: "cart", component: CartComponent, title: "Cart | Ecomzy"},
      {path: "test", component: TestComponent, title: "Test | Ecomzy"}
    ]),
    NgOptimizedImage,
    FormsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
