import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { Router } from '@angular/router';

// USING A SERVICE INSTEAD
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
 // styleUrls: ['./product-list.component.css'],
  providers: [ ProductService]
})

export class ProductListComponent  implements OnInit{


    products: Product[];


    constructor(private productService: ProductService) {

        // this.products = productService.getProducts();
    }

    ngOnInit() {
      this.getProducts();
    }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }

}
