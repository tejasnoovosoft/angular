import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../../product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    @Input() filteredProducts: any
    selectedCategory: string = ''

    @Output() onChangeProducts = new EventEmitter()

    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
    }

    onCategoryChange(event: Event): void {
        const select = event.target as HTMLSelectElement
        this.selectedCategory = select.value
        console.log(typeof select.value)
        if (this.selectedCategory !== 'All') {
            this.productService.getProductsByCategory(this.selectedCategory).subscribe((data) => this.onChangeProducts.emit(data))
        }
    }

}
