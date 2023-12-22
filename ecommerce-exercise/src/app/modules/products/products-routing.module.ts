import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "../../components/products/products.component";

const routes: Routes = [
  {
    path: "", redirectTo: "/products", pathMatch: "full"
  },
  {
    path: "products", component: ProductsComponent, title: "Ecommerce | Products"
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ProductsRoutingModule {
}
