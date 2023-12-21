import {Component, OnInit} from '@angular/core';
import {ProductViewModel} from "../../models/Product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductViewModel[] = []

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (data) => {
        data.products.forEach((product) => {
            this.products.push({
              id: product.id,
              title: product.title,
              category: product.category,
              price: product.price
            })
          }
        )
      }
    )
  }

}
