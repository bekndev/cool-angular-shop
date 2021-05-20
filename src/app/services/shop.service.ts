import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../store/models/product.model';
import { Category } from '../store/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUri:string = 'http://localhost:5000/products';
  categoriesUri:string = 'http://localhost:5000/categories';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUri);
  }

  getCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUri);
  }
}
