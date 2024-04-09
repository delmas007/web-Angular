import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  // products$! : Observable<Array<Product>>;
  products : Array<Product> = [];

  constructor( private productService : ProductService){

  }

  ngOnInit() {
   this.getProducts()
  }
  getProducts(){
    this.productService.getProduct()
    .subscribe({
      next: data => {
        this.products = data
      },
      error : err =>{
        console.log(err)
      }
    })

    // this.products$ = this.productService.getProduct();
  }
  handleCheckProduct(product : any){
    this.productService.checkProduct(product).subscribe({
      next : updateProduct =>{
        product.checked = !product.checked;
      },
      error : err =>{
          console.log(err)
      }
    })
}
handleDeleteProduct(product : number) {
  if (confirm("voulez vous supprimer ce produit ?")) {
    this.productService.deleteProduct(product).subscribe({
      next: data => {
        this.getProducts();
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
}
