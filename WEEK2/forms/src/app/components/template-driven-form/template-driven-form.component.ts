import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  userLogin(user: NgForm) {
    console.log(user)
    console.log(user.controls)
  }

    protected readonly name = name;
}
