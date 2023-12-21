import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Product, ProductResponse} from "../models/Product";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private _http: HttpClient) {
    }


    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('An error occurred:', error.error);
        } else {
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

    getProducts() {
        return this._http.get<ProductResponse>('https://dummyjson.com/products', {
            observe: "body"
        }).pipe(
            retry(3),
            catchError(this.handleError)
        )
    }

    addProduct(product: Product) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this._http.post<Product>('https://dummyjson.com/products/add', product, {headers})
    }

    deleteProduct(id: number) {
        return this._http.delete(`https://dummyjson.com/products/${id}`).pipe(
            catchError(this.handleError)
        )
    }

    updateProduct(id: number) {
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this._http.put(`https://dummyjson.com/products/${id}`, {headers})
    }

    searchProduct(query: string) {
        return this._http.get<Product[]>(`https://dummyjson.com/products/search?q=${query}`)
    }
}
