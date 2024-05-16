import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  studentId: any;
  studentSession: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.studentSession = JSON.parse(sessionStorage.getItem("student"));
    this.studentId = this.studentSession.studentId;
    this.getMarks();
  }

  getMarks(){
    this.studentSession = JSON.parse(sessionStorage.getItem("student"));
    this.studentId = this.studentSession.studentId;
  }

  showNavigation(){
    return !(
      this.router.url ==='/' || 
      this.router.url === '/login' || 
      this.router.url ==='/**'|| 
      this.router.url === '/logout');
  }

  logout(){
    console.log("Nav-logout");
    console.log(this.studentSession.studentId);
    sessionStorage.clear();
  }

}
