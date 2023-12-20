import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateDrivenFormComponent} from "../../components/template-driven-form/template-driven-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [TemplateDrivenFormComponent],
  exports: [
    TemplateDrivenFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TemplateDrivenFormModule {
}
