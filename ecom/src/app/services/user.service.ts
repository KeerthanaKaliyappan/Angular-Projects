import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/ecom/userController/';

  constructor(private http: HttpClient) { }

  //Adds new Users to the app
  registerUser(user: User):Observable<Object>{
      return this.http.post(`${this.baseUrl}/register`,user);
  }

  //Logs in existing user
  loginUser(email: string):Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/login/`+email);
  }
}
