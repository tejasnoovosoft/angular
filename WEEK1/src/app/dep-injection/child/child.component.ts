import {Component, inject, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {DepInjectionService} from "../depservice.service";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[DepInjectionService]
})
export class ChildComponent implements OnInit {

  employees: Employee[] = [];
  private _api = inject(DepInjectionService)

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
