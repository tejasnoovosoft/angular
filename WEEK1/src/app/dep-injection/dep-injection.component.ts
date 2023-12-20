import {Component, OnInit} from '@angular/core';
import {DepInjectionService} from "./depservice.service";
import {Employee} from "./Employee";

@Component({
  selector: 'app-dep-injection',
  templateUrl: './dep-injection.component.html',
  styleUrls: ['./dep-injection.component.css']
})
export class DepInjectionComponent implements OnInit {

  constructor(private _api: DepInjectionService) {
  }

  employees: Employee[] = [];

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees() {
    this.employees = this._api.employees
    console.log(this.employees)
  }

  incrementSalary() {
    this._api.employees.forEach((employee) => {
      employee.empSalary += 2
    })
  }

}
