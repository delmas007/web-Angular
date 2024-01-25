import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products : Array<any> =[]

  constructor( private http : HttpClient){
  
  }

  ngOnInit() {
    this.http.get<Array<any>>('http://localhost:9090/api/produits')
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
    this.http.patch<any>(`http://localhost:9090/api/modifierProduit/${product.id}`,{checked:!product.checked }).subscribe({
      next : updateProduct =>{
        product.checked = !product.checked;
      },
      error : err =>{
          console.log(err)
      }
    })
}
}