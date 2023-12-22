import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from "../../components/products/products.component";
import {ProductsRoutingModule} from "./products-routing.module";
import {ProductCardComponent} from "../../components/product-card/product-card.component";

@NgModule({
  declarations: [ProductsComponent, ProductCardComponent],
  imports: [
    CommonModule, ProductsRoutingModule
  ]
})
export class ProductsModule {
}
