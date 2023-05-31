import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http:HttpClient) { }

  fetchProductsList():Observable<any> {
    return this.http.get<any>('http://localhost:8080/product/productList')
  }

  deleteProductById(id: number) {
    return this.http.get<any>('http://localhost:8080/product/deleteProductById/' + id); 
  }


  addProductToDb(newProduct: Product) {
    return this.http.post<any>('http://localhost:8080/product/addProduct', newProduct);
  }

}
