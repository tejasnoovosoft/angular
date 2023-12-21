import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {validatePassword} from "./components/cross-field-validation/cross-field-validation.component";

@Directive({
  selector: '[checkPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckPasswordDirective,
      multi: true,
    },
  ]
})
export class CheckPasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return validatePassword(control)
  }
}
