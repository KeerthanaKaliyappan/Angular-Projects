import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../classes/product';
import { CartService } from '../services/cart.service';
import { Cart } from '../classes/cart';
import { User } from '../classes/user';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  //Validation
  existingItem: boolean = false;

  userId: number;
  prodId: number;
  quantity: number = 1;
  product: Product = new Product();
  cart: Cart = new Cart();
  userSession: User = new User();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
     private productService: ProductService,
      private cartService: CartService) { }

  ngOnInit(): void {

    this.userSession = JSON.parse(sessionStorage.getItem("user"));
    this.userId = this.userSession.userid;
    this.prodId = this.route.snapshot.params['prodId'];

    this.getListProductDetails();
    this.getCheckForUniqueCartProducts();
    
  }

  getListProductDetails(){

    //Displays products information / details
    this.productService.listProductDetails(this.prodId)
    .subscribe(data => 
      {
        this.product = data;
      });

  }

  getCheckForUniqueCartProducts(){

    this.cartService.checkForUniqueCartProducts(this.userId,this.prodId)
    .subscribe( data => 
      {
          if(data == false)
            this.existingItem = true;
          else
            this.existingItem = false;
      });
  }

  getAddToCart(){

    //Adds products to user's Cart
    this.cart.userId = this.userId;
    this.cart.productId = this.product;
    this.cart.quantity = this.quantity;
    this.cart.subprice = this.cart.quantity * this.cart.productId.price;

    this.cartService.addToCart(this.cart)
    .subscribe(data => 
      {
        console.log(data);
        this.goToHome();
      });
  }

  goToHome(){
     this.router.navigate(['home']);
  }

  goToCart(){
      this.router.navigate(['cart']);
  }

}

