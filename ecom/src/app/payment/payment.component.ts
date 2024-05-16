import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  //Validation
  isValidCard: boolean = false;
  invalidCredentials: boolean = false;

  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;

  constructor(
        private paymentService: PaymentService,
        private cartService: CartService,
        private router: Router) { }

  ngOnInit(): void {
  }

  checkPayment(){

    //Performs payment
    this.paymentService.getCardDetails(this.cardNumber)
    .subscribe( data => {
      this.validateCardDetails(data);
      if(this.isValidCard == true){
          this.goToPaymentSuccessPage();
      }
      console.log(data);
    });
  }

  validateCardDetails(data){

    if(data != null){

        if((this.cardHolderName == data.cardHolderName) &&
          (this.cardNumber == data.cardNumber) && 
          (this.expiryMonth == data.expiryMonth) && 
          (this.expiryYear = data.expiryYear) &&
          (this.cvv == data.cvv)){

            this.isValidCard = true;
            this.invalidCredentials = false;
          }
        else
          this.invalidCredentials = true;
    }
    else
        this.invalidCredentials = true;
    
  }

  goToPaymentSuccessPage(){
    sessionStorage.setItem("paid","true");
    this.router.navigate(['paymentSuccess']);
  }

}
