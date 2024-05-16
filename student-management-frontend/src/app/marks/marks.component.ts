import { Marks } from './../classes/marks';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  marks: Marks = new Marks();
  studentId: any;
  studentSession: any;

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.studentSession = JSON.parse(sessionStorage.getItem("student"));
    this.studentId = this.studentSession.studentId;
    console.log("Marks");
    console.log(this.studentSession.studentId);
    this.dashboardService.getMarks(this.studentId)
    .subscribe(data => {
      //console.log(data);
      this.marks = data;
    })
    
  }
}
