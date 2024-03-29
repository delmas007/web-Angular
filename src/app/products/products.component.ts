import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products$! : Observable<Array<Product>>;

  constructor( private productService : ProductService){
  
  }

  ngOnInit() {
    // this.productService.getProduct()
    // .subscribe({
    //   next: data => {
    //     this.products = data
    //   },
    //   error : err =>{
    //     console.log(err)
    //   }
    // })

    this.products$ = this.productService.getProduct();
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
}