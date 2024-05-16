import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Validation
  itemNotFound: boolean = false;

  keyword: string;
  products: Product[];
  user: User;

  constructor(
    private productService: ProductService, 
    private router: Router) { }

  ngOnInit(): void {
      this.getListAllProducts();
      this.user = JSON.parse(sessionStorage.getItem("user"));
  }

  getListAllProducts(){

    //Displays list of all products available
    this.productService.listAllProducts()
        .subscribe( data => 
          {
            //console.log(data)
            this.products = data;
          });

  }

  search(){
    
    //Search products by keyword
    this.productService.searchByKeyword(this.keyword)
    .subscribe( data => {
        this.products = data;
            if(this.products.length == 0)
              this.itemNotFound = true;
            else
              this.itemNotFound = false;
    });

  }

  goToProduct(prodId: number){
    this.router.navigate(['product',prodId]);
  }
  
}
