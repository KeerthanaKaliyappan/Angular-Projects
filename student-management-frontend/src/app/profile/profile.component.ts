import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../classes/student';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  student: Student = new Student();
  studentSession: any;
  studentId: any;

  constructor(
    private router: Router,
    private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.studentSession = JSON.parse(sessionStorage.getItem("student"));
    this.studentId = this.studentSession.studentId;
    this.dashboardService.getProfile(this.studentId)
    .subscribe(data => {
     // console.log(data);
      this.student = data;
    })
  }

}
