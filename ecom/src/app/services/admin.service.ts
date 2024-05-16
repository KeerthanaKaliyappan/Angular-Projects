import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/ecom/adminController';

  constructor(private http: HttpClient) { }

   //Admin adds new product
   registerProduct(product: Product): Observable<Object>{
    return this.http.post(`${this.baseUrl}/product`,product);
  }
}
