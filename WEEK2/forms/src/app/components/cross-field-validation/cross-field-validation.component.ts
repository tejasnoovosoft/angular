import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";
import {CheckPasswordDirective} from "../../check-password.directive";

export const validatePassword: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  console.log(password && confirmPassword && password.value === confirmPassword.value)

  return password && confirmPassword && password.value !== confirmPassword.value
    ? {validatePassword: true}
    : null;
};

@Component({
  selector: 'app-cross-field-validation',
  templateUrl: './cross-field-validation.component.html',
  styleUrls: ['./cross-field-validation.component.css'],
  providers: [CheckPasswordDirective]
})
export class CrossFieldValidationComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

  /*  formData = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, this.validateEmail]),
    })*/


  formData = new FormGroup({
      password: new FormControl(),
      confirmPassword: new FormControl()
    },
    {validators: validatePassword})

  validateEmail(control: any) {
    let EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return EMAIL_REGEXP.test(control.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
}

