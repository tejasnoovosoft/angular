import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterLink} from "@angular/router";
import {RegistrationModule} from "./modules/registration/registration.module";
import {ReactiveFormsModuleDemo} from "./modules/reactive-forms/reactive-forms.module";
import {UsersModule} from "./modules/users/users.module";
import {TemplateDrivenFormModule} from "./modules/template-driven-form/template-driven-form.module";
import { CrossFieldValidationComponent } from './components/cross-field-validation/cross-field-validation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CheckPasswordDirective } from './check-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    CrossFieldValidationComponent,
    CheckPasswordDirective,
  ],
  imports: [
    BrowserModule,
    RouterLink,
    RegistrationModule,
    ReactiveFormsModuleDemo,
    UsersModule,
    TemplateDrivenFormModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
