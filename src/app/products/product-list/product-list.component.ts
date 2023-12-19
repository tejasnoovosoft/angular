import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: any

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.getProducts()
    }

    getProducts() {
        this.products = this.productService.getProducts()
    }

}
