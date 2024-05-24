import { Router } from '@angular/router';
import { Employee } from './../../models/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  keyword: string;

  constructor(private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees()
      .subscribe(data => {
        this.employees = data;
        console.log(data);
      })
  }

  getEmployeesByDepartment() {
    this.employeeService.getEmployeesByDepartment(this.keyword)
      .subscribe(data => {
        console.log(data);
        if (data.length === 0) {
          this.getAllEmployees();
          console.log("Input is empty");
        }
        else {
          this.employees = data;
        }
      })
  }

  updateEmployeeById(id: number) {
    this.router.navigate(["employees", id]);
  }

  deleteEmployeeById(id: number) {
    this.employeeService.deleteEmployeeById(id)
      .subscribe(data => {
        console.log(data);
        this.getAllEmployees();
      });
  }
}
