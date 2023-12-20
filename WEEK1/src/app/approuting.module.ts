import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products/products.component";


const routes: Routes = [
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
