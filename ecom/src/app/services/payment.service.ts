import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8080/ecom/paymentController';

  constructor(private http: HttpClient) { }

  getCardDetails(cardNumber: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/pay/${cardNumber}`);
  }
}
