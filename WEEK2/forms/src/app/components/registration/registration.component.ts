import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  submit(login: NgForm) {
    console.log(login)
  }
}
