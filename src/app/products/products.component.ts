import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products : Array<any> =[
    {id : 1 , name : 'pc' , price : 250000, checked : false},
    {id : 2 , name : 'climatiseur' , price : 120000, checked : true},
    {id : 3 , name : 'phone' , price : 350000, checked : false},
  ]

  handleCheckProduct(product : any){
    product.checked = !product.checked;
  }

}
