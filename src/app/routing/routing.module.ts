import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoutingComponent} from "./routing.component";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from "./auth.guard";
import {ProductListComponent} from './product-list/product-list.component';
import {FormsModule} from "@angular/forms";


const routes: Routes = [
    {
        path: "category", component: RoutingComponent, canActivate: [AuthGuard]
    },
    {
        path: "category/:category", component: ProductListComponent, title: "Category"
    }
]

@NgModule({
    declarations: [RoutingComponent, PageNotFoundComponent, ProductListComponent],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FormsModule,
    ]
})
export class RoutingModule {
}
