import { Student } from './../classes/student';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentBaseUrl = 'http://localhost:8080/api/studentController/';

  constructor(private http: HttpClient) { }

  loginStudent(email: string):Observable<Student>{
    return this.http.get<Student>(`${this.studentBaseUrl}login/`+email);
  }
}
