import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Validations
  validCredentials: boolean = true;
  error_message: boolean = true;

  adminEmail = "kate@gmail.com";
  adminPassword = "1234";
  email: string;
  password: string;
  user: User = new User();

  constructor(
    private router: Router, 
    private userService: UserService) { }

  ngOnInit(): void {
  }

  performLogin(){

    //Validates the credentials and performs login
      this.userService.loginUser(this.email)
      .subscribe( data => {
        console.log(data);
        this.user = data;
        if(this.user == null)
            this.error_message = false;
        else
        {
          if(this.user.password == this.password){
              this.checkForAdmin();
              this.goToHomePage();
            }
          else{
              this.validCredentials = false;
              this.error_message = true;
            }
        }
      });

  }

  checkForAdmin(){
      if(this.user.email == this.adminEmail && this.user.password == this.adminPassword)
        sessionStorage.setItem("admin","true");
  }

  onSubmit(){
      this.performLogin();
  }

  goToHomePage(){
      sessionStorage.clear();
      this.checkForAdmin();
      sessionStorage.setItem("user",JSON.stringify(this.user));
      this.router.navigate(['home']);
  }

  goToRegister(){
    this.router.navigate(['register']);
  }
}
