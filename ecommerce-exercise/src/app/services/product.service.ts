import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs";
import {ProductResponse} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) {
  }

  getProducts() {
    return this._http.get<ProductResponse>('https://dummyjson.com/products').pipe(
      retry(3),
    );
  }
}
