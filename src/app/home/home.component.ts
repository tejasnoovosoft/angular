import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../product.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => this.products = data)
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
    window.alert(`${product.title} is added successfully...!`)
  }
}
