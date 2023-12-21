import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    newProduct: Product = {
        id: 0,
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: '',
        category: '',
        thumbnail: '',
        images: []
    }

    products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
    fetchedProducts: Product[] = []


    constructor(private productService: ProductService) {
    }

    ngOnInit(): void {
        this.getProducts()
    }

    addProduct() {
        this.productService.addProduct(this.newProduct).subscribe({
            next: (product) => {
                console.log('Product added:', product);

                // Add in the local storage
                this.products.push(this.newProduct);
                localStorage.setItem('products', JSON.stringify(this.products));

                // Reset newProduct
                this.newProduct = {
                    id: 0,
                    title: '',
                    description: '',
                    price: 0,
                    discountPercentage: 0,
                    rating: 0,
                    stock: 0,
                    brand: '',
                    category: '',
                    thumbnail: '',
                    images: []
                };
            },
            error: (error) => {
                console.error('Error adding product:', error);
            }
        });
    }


    deleteProduct(id: number) {
        // delete from server
        this.productService.deleteProduct(id).subscribe()

        // delete from local storage
        const index = this.products.findIndex((product) => product.id === id);

        if (index !== -1) {
            this.products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(this.products));
        }
    }

    updateProduct(id: number) {
        // update on server
        this.productService.updateProduct(id).subscribe()

        // update on local storage
        const index = this.products.findIndex((product) => product.id === id);

        if (index !== -1) {
            this.products[index] = this.newProduct
            localStorage.setItem('products', JSON.stringify(this.products));
        }
    }

    getProducts() {
        this.productService.getProducts().subscribe({
            next: (data) => {
                this.fetchedProducts = data.products
            },
            error: (error) => {
                console.log("Something Went wrong ", error)
            }
        })
    }
}
