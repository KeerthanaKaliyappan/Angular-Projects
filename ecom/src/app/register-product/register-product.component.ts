import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  product: Product = new Product();
  selectedFiles: FileList;
  currentFileUpload: File;
  imageBaseUrl = 'http://localhost:8080/ecom/adminController/files/';
  imageFileName: string;

  constructor(
    private adminService: AdminService,
    private imageService: ImageService) { }

  ngOnInit(): void {
  }

  registerProduct(){

    this.product.imagePath = this.imageFileName;
    this.adminService.registerProduct(this.product)
    .subscribe( data => 
      {
        console.log(data);
      });

  }

  selectFile(event) {
    const file = event.target.files.item(0)
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
 
  upload() {
 
    this.currentFileUpload = this.selectedFiles.item(0)
    this.imageService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      this.imageFileName = this.imageBaseUrl + this.currentFileUpload.name;
      //console.log("image file name" + this.imageFileName);
    })
 
    this.selectedFiles = undefined
  }

}
