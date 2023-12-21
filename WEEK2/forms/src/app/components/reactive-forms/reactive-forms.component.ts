import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  favouriteColor = new FormControl('Blue')
  loginForm = new FormGroup(
    {
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', this.validateEmail)
    })

  constructor() {
  }

  ngOnInit(): void {

  }

  updateColor(newColor: FormControl) {
    this.favouriteColor.setValue(newColor.value)
    console.log(this.favouriteColor.value)
  }

  loginUser() {
    console.log(this.loginForm)
    console.log(this.loginForm.value)
  }

  validateEmail(control: any) {
    let EMAIL_REGEXP = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return EMAIL_REGEXP.test(control.value) ? null : {
      validateEmail: {
        valid: false
      }
    };
  }
}
