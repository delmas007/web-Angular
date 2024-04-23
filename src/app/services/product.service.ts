import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private host: string = 'http://localhost:9090';
  constructor(private http:HttpClient) { }

  public getProduct():Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.host}/api/produits`)
  }

  public checkProduct(product:Product):Observable<Product>{
      return  this.http.patch<Product>(`${this.host}/api/modifierProduit/${product.id}`,{checked:!product.checked })
  }

  public searchProduct(keyword:String):Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`${this.host}/api/search/${keyword}`);
  }

  public deleteProduct(product:number):Observable<Product>{
    return  this.http.delete<Product>(`${this.host}/api/supprimerProduit/${product}`)
  }

  saveProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>(`${this.host}/api/ajouterProduit`, product);

  }

  public getProductById(productId: number):Observable<Product>{
    return this.http.get<Product>(`${this.host}/api/produit/${productId}`);
  }

  public updateProduct(product:Product):Observable<Product>{
    return  this.http.put<Product>(`${this.host}/api/modifierPutProduit/${product.id}`,product)
  }
}


