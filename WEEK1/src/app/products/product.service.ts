import {Injectable} from '@angular/core';
import {Product} from "./product";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() {
    }

    products: Product[] = [
        {
            id: 1,
            productName: "Airbuds",
            price: 1200
        },
        {
            id: 2,
            productName: "SmartPhone",
            price: 32000
        }
    ]

    getProducts() {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(this.products);
            }, 1000);
        });
    }
}
