import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { Router, ActivatedRoute } from '@angular/router';


import { ProductService } from '../services/product.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.css'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {

 // products: Product[];
 // selectedId: number;
  products$: Observable<Product[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    // this.products = productService.getProducts();
  }

   // Push a search term into the observable stream.
   search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
   //  this.getProducts();

   this.products$ = this.searchTerms.pipe(
    // wait 300ms after each keystroke before considering the term
    debounceTime(300),

    // ignore new term if same as previous term
    distinctUntilChanged(),

    // switch to new search observable each time the term changes
    switchMap((term: string) => this.productService.searchProducts(term)),
  );
  }



 // getProducts(): void {    this.productService      .getProducts()      .subscribe((products) => (this.products = products));  }
 
}
