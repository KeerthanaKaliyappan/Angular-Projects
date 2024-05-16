import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Validation
  userIdExists: boolean = false;

  user: User = new User();

  constructor(
    private router: Router, 
    private userService: UserService) { }

  ngOnInit(): void {
  }

  createUser(){

    //Creates new user account
    this.userService.registerUser(this.user)
    .subscribe(data => {
      console.log(data)
      if(data == null){
        this.userIdExists = true;
      }
      else{
        this.userIdExists = false;
        sessionStorage.clear();
        sessionStorage.setItem("user",JSON.stringify(data));
        this.goToHomePage();
      }
    });
  }

  onSubmit(){
    this.createUser();
  }

  goToHomePage(){
    this.router.navigate(['home']);
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

}
