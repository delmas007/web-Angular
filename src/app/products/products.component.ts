import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products : Array<any> =[]

  constructor( private productService : ProductService){
  
  }

  ngOnInit() {
    this.productService.getProduct()
    .subscribe({
      next: data => {
        this.products = data
      },
      error : err =>{
        console.log(err)
      }
    })
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