import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getProduct():Observable<any>{
    return this.http.get<Array<any>>('http://localhost:9090/api/produits')
  }

  public checkProduct(product:any,):Observable<any>{
    return  this.http.patch<any>(`http://localhost:9090/api/modifierProduit/${product.id}`,{checked:!product.checked })
  }
}


