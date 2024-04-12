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

  public checkProduct(product:Product):Observable<Product>{
      return  this.http.patch<Product>(`http://localhost:9090/api/modifierProduit/${product.id}`,{checked:!product.checked })
  }

  public searchProduct(keyword:String):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:9090/api/search/${keyword}`);
  }

  public deleteProduct(product:number):Observable<Product>{
    return  this.http.delete<Product>(`http://localhost:9090/api/supprimerProduit/${product}`)
  }

  saveProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>('http://localhost:9090/api/ajouterProduit', product);

  }
}


