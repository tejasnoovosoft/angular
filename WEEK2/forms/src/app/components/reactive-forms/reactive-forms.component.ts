import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  favouriteColor = new FormControl('Blue')
  loginForm = new FormGroup(
    {
      user: new FormControl(''),
      password: new FormControl('')
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

}
