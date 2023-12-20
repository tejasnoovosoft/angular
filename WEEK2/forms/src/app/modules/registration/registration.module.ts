import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationRoutingModule} from "./registration-routing.module";
import {RegistrationComponent} from "../../components/registration/registration.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule, RegistrationRoutingModule, FormsModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule {
}
