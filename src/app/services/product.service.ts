import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProduct():Observable<Array<Product>>{
    return this.http.get<Array<Product>>('http://localhost:9090/api/produits')
  }

  public checkProduct(product:Product,):Observable<Product>{
    return  this.http.patch<Product>(`http://localhost:9090/api/modifierProduit/${product.id}`,{checked:!product.checked })
  }
}


