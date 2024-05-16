import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  //Validation
  checkForAdmin: string;

  constructor(public router: Router) { 
  }

  ngOnInit(): void {
  }

  checkAdmin(){
    this.checkForAdmin = sessionStorage.getItem("admin");
    if(this.checkForAdmin == "true")
      return true;
    else
      return false;
  }

  showNavigation(){
    return !(
      this.router.url ==='/' || 
      this.router.url === '/login' || 
      this.router.url ==='/register'|| 
      this.router.url === '/logout');
  }

  //Removes data stored in sessionStorage
  logout(){
    sessionStorage.clear();
  }

}
