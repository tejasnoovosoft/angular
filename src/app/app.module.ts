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
import {ClassstylebindingComponent} from './classstylebinding/classstylebinding.component';
import {SizerComponent} from './sizer/sizer.component';
import {DirectivesComponent} from './directives/directives.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {ComponentComponent} from './component/component.component';
import {NgChangeDemoComponent} from './ng-change-demo/ng-change-demo.component';
import {HerosComponent} from './heros/heros.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {InputOutputComponent} from './input-output/input-output.component';
import {DecoratorsComponent} from './decorators/decorators.component';
import {ChildDecoratorComponent} from './child-decorator/child-decorator.component';
import {ChildContentComponent} from './child-content/child-content.component';
import {PipesComponent} from './pipes/pipes.component';
import {ExponentialPipe} from './pipes/exponential.pipe';
import {MultiplyByTenPipe} from './pipes/multiply-by-ten.pipe';
import {FetchPipe} from './pipes/fetch.pipe';
import {ProductsModule} from "./products/products.module";
import {AppRoutingModule} from "./approuting.module";
import {DepInjectionComponent} from "./dep-injection/dep-injection.component";
import {ChildComponent} from "./dep-injection/child/child.component"
import {RoutingModule} from "./routing/routing.module";
import {PageNotFoundComponent} from "./routing/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarComponent,
    TestComponent,
    ClassstylebindingComponent,
    SizerComponent,
    DirectivesComponent,
    ItemDetailsComponent,
    ComponentComponent,
    NgChangeDemoComponent,
    HerosComponent,
    UserDetailsComponent,
    ChildComponent,
    InputOutputComponent,
    DecoratorsComponent,
    ChildDecoratorComponent,
    ChildContentComponent,
    PipesComponent,
    ExponentialPipe,
    MultiplyByTenPipe,
    FetchPipe,
    DepInjectionComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent, title: "Home | Ecomzy"},
      {path: "home", component: HomeComponent, title: "Home | Ecomzy"},
      {path: "cart", component: CartComponent, title: "Cart | Ecomzy"},
      {path: "test", component: TestComponent, title: "Test | Ecomzy"},
      {path: "**", component: PageNotFoundComponent, title: "404 Not Found | Ecomzy"}
    ]),
    NgOptimizedImage,
    FormsModule,
    ProductsModule,
    AppRoutingModule,
    RouterModule,
    RoutingModule
  ],
  providers: [CartService],
  exports: [
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
