import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { Router, ActivatedRoute } from '@angular/router';


import { ProductService } from '../services/product.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  products: Product[];
  crises$: Observable<Product[]>;
  selectedId: number;
  private searchTerms = new Subject<string>();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    // this.products = productService.getProducts();
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
}
