import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  getProducts() {
    return this.http.get<Product[]>('/assets/products.json')
  }
}
