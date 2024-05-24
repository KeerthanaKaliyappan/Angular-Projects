import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from './../../models/employee';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee = new Employee();
  id: number;
  isUpdate: boolean = false;

  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    if( this.id !== undefined ){
      this.getEmployeeById(this.id);
      this.isUpdate = true;
    }
  }

  saveEmployee() {
    this.employeeService.addEmployees(this.employee)
                        .subscribe( data => {
                          console.log(data);
                          this.employee = new Employee();
                        })
  }

  getEmployeeById(id: number) {
    this.employeeService.getEmployeeById(id)
                        .subscribe( data => {
                          console.log(data);
                          this.employee = data;
                        })
  }

  updateEmployeeById() {
    this.employeeService.updateEmployeeById(this.employee.id, this.employee)
                        .subscribe( data => {
                          console.log(data);
                        })

    }

}
