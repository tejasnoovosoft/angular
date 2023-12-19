import {Injectable} from '@angular/core';
import {Employee} from "./Employee";

@Injectable({
  providedIn: 'root'
})
export class DepInjectionService {

  constructor() {
  }

  employees: Employee[] = [
    {
      empId: 1,
      empName: "Tejas",
      empSalary: 7.5
    },
    {
      empId: 2,
      empName: "Vaishnav",
      empSalary: 7.5
    },
  ]
}
