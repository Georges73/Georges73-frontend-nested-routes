import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';

// USING A SERVICE INSTEAD
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  // styleUrls: ['/product-details.component.css'],
  providers: [ProductService],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public id: number;

  products: Product[] = [];  // <== is the solution to undefined error
  private sub: any;

  prodIdSnapshot: number;

  constructor(    private productService: ProductService, private route: ActivatedRoute )
  {
    this.productService.getProducts().subscribe((res) => {      this.products = res;    });
  }

  ngOnInit() {
    // this.getProduct();

    this.sub = this.route.params.subscribe((params) => {
      this.id = +params.id;
    });
  }
  getProduct(): void {
    //  const id = +this.route.snapshot.paramMap.get('id');
    // this.productService.getProduct(id)
    // .subscribe(product => this.product = product);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
