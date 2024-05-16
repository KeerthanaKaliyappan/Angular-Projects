import { StudentService } from './../services/student.service';
import { Student } from './../classes/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validCredentials: boolean = true;
  error_message: boolean = true;

  email: string;
  password: string;
  student: Student = new Student();
  studentId: number;

  constructor(
    private router: Router, 
    private studentService: StudentService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.performLogin();
  }

  performLogin(){
      this.studentService.loginStudent(this.email)
      .subscribe( data => {
        console.log(data);
        this.student = data;
        if(this.student == null)
            this.error_message = false;
        else
        {
          if(this.student.password == this.password){
              this.studentId=data.studentId;
              this.goToProfilePage(data.studentId);
            }
          else{
              this.validCredentials = false;
              this.error_message = true;
            }
        }
      });
  }

  goToProfilePage(studentId: number){
    sessionStorage.clear();
    sessionStorage.setItem("student",JSON.stringify(this.student));
    this.router.navigate(['student',studentId]);
  }

}
