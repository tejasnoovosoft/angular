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
import { SizerComponent } from './sizer/sizer.component';
import { DirectivesComponent } from './directives/directives.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ComponentComponent } from './component/component.component';
import { NgChangeDemoComponent } from './ng-change-demo/ng-change-demo.component';
import { HerosComponent } from './heros/heros.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildComponent } from './child/child.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { ChildDecoratorComponent } from './child-decorator/child-decorator.component';
import { ChildContentComponent } from './child-content/child-content.component';
import { PipesComponent } from './pipes/pipes.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { MultiplyByTenPipe } from './pipes/multiply-by-ten.pipe';
import { FetchPipe } from './pipes/fetch.pipe';

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
    FetchPipe
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
