import { Student } from './../classes/student';
import { Marks } from './../classes/marks';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../classes/announcement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private dashboardBaseUrl = 'http://localhost:8080/api/studentDashboard/';

  constructor(private http: HttpClient) { }

  listAllAnnouncements(): Observable<Announcement[]>{
    return this.http.get<Announcement[]>(`${this.dashboardBaseUrl}announcements`);
  }

  getMarks(studentId: number): Observable<Marks>{
    return this.http.get<Marks>(`${this.dashboardBaseUrl}studentMarks/${studentId}`);
  }

  getProfile(studentId: number): Observable<Student>{
    return this.http.get<Student>(`${this.dashboardBaseUrl}student/${studentId}`);
  }

}
