import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-routing',
    templateUrl: './routing.component.html',
    styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

    constructor(private productService: ProductService, private route: ActivatedRoute) {
    }

    products: Product[] = []
    filteredProducts: Product[] = []
    selectedCategory: string = ''


    ngOnInit(): void {
        this.getAllProducts()
    }

    getAllProducts() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data
            this.filteredProducts = [...this.products]
        })
    }

    onCategoryChange(event: Event): void {
        const select = event.target as HTMLSelectElement
        this.selectedCategory = select.value
        console.log(typeof select.value)
        if (this.selectedCategory !== 'All') {
            this.productService.getProductsByCategory(this.selectedCategory).subscribe((data) => this.filteredProducts = data)
        }
    }
}
