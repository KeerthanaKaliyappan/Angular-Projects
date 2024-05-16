import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/ecom/productController";

  constructor(private http: HttpClient) { }

  //Displays list of all available products
  listAllProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  //Search for product
  searchByKeyword(keyword: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/products/${keyword}`);
  }

  //Displays details of each product
  listProductDetails(productid: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/product/${productid}`);
  }
}
