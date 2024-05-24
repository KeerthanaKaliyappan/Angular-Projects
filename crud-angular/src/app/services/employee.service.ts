import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private API_BASE_URL = "http://localhost:8080/api/employees";

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_BASE_URL);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.API_BASE_URL}/${id}`);
  }

  getEmployeesByDepartment(department: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.API_BASE_URL}?department=${department}`);
  }

  addEmployees(employee: Employee) {
    return this.httpClient.post(`${this.API_BASE_URL}`, employee, {responseType: 'text'});
  }

  updateEmployeeById(id: number, employee: Employee) {
    return this.httpClient.put(`${this.API_BASE_URL}/${id}`, employee, {responseType: 'text'});
  }

  deleteEmployeeById(id: number): Observable<any> {
    return this.httpClient.delete(`${this.API_BASE_URL}/${id}`,{responseType: 'text'});
  }

}
