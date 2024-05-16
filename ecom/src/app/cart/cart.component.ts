import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { CartService } from '../services/cart.service';
import { Cart } from '../classes/cart';
import { Product } from '../classes/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //Validation
  isCartEmpty: boolean = false;

  userId: number;
  totalPrice: number;
  userSession: User = new User();
  carts: Cart[];
  cart: Cart = new Cart();
  isPaid: string;
  
  constructor(
    private router: Router, 
    private cartService: CartService) { }

  ngOnInit(): void {

    this.isPaid = sessionStorage.getItem("paid");
    this.userSession = JSON.parse(sessionStorage.getItem("user"));
    this.userId = this.userSession.userid;

    if(this.isPaid == "true"){
      this.deleteCart();
      sessionStorage.removeItem("paid");
    }

    this.getListCartDetails();
    this.getTotalCartPrice();

  }

  getListCartDetails(){
    
    //Displays list of all cart products
    this.cartService.listCartDetails(this.userId)
    .subscribe(data => 
      {
        this.carts = data;
        if(data == null)
            this.isCartEmpty = true;
        else
            this.isCartEmpty = false; 
      });
  }

  getTotalCartPrice(){

    //Displays sum of all cart products
    this.cartService.fetchTotalCartPrice(this.userId)
    .subscribe( data => 
      {
        this.totalPrice = data;
      });
  }
  
  getUpdateCartItem(productId: Product, quantity: number){

    if(quantity < 0)
      quantity = 0;

    //Updates cart item
    this.cart.userId = this.userId;
    this.cart.productId = productId;
    this.cart.quantity = quantity;
    this.cart.subprice = quantity * productId.price;
    this.cartService.updateCartItem(this.userId,productId.productid,this.cart)
    .subscribe( data => {
        //console.log(data);
        this.reloadData();
    });
  }

  getDeleteCartItem(productid: number){

    //Deletes products from cart
    this.cartService.deleteCartItem(this.userId,productid)
    .subscribe( data => 
      {
        //console.log(data);
        this.reloadData();
      });
  }

  deleteCart(){

    //Deletes cart
    this.cartService.deleteCart(this.userId)
    .subscribe( data => {
      //console.log(data);
      this.reloadData();
    });

  }

  reloadData(){
    this.getListCartDetails();
    this.getTotalCartPrice();
  }
  
  goToPayment(){
    this.router.navigate(['payment']);
  }
  
}
