import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../classes/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8080/ecom/cartController';

  constructor(private http: HttpClient) { }

  //Checks for unique products in Cart
  checkForUniqueCartProducts(userId: number, productId: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/checkCart/${userId}/${productId}`);
  }

  //Adds product to user's Cart
  addToCart(cart: Cart): Observable<Object>{
    return this.http.post(`${this.baseUrl}/addCart`,cart);
  }

  //Displays list of products in Cart
  listCartDetails(userId: number): Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.baseUrl}/cart/${userId}`);
  }

  //Displays total price of all Cart items
  fetchTotalCartPrice(userId: number): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/cartPrice/${userId}`);
  }

  //Update cart item
  updateCartItem(userId: number, productId: number, cart: Cart): Observable<Object>{
    return this.http.put(`${this.baseUrl}/cart/${userId}/${productId}`,cart);
  }

  //Delete single cart item
  deleteCartItem(userId: number, productId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/cart/${userId}/${productId}`,{responseType: 'text'});
  }

  //Deletes Cart
  deleteCart(userId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/cart/${userId}`,{responseType: 'text'});
  }
}
