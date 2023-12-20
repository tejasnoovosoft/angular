import {Injectable} from '@angular/core';
import {Product} from "./product.service";

@Injectable()
export class CartService {
  constructor() {
  }

  items: Product[] = []

  addToCart(product: Product) {
    this.items.push(product)
  }
}
