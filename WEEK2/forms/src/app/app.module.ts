import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterLink} from "@angular/router";
import {RegistrationModule} from "./modules/registration/registration.module";
import {ReactiveFormsModuleDemo} from "./modules/reactive-forms/reactive-forms.module";
import {UsersModule} from "./modules/users/users.module";
import {TemplateDrivenFormModule} from "./modules/template-driven-form/template-driven-form.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RegistrationModule,
    ReactiveFormsModuleDemo,
    UsersModule,
    TemplateDrivenFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
