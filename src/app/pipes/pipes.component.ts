import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Product } from '../products';



@Pipe({

  name: 'selectedProduct'
})
export class PipesComponent implements PipeTransform {

  transform(allProducts: Product[], productId: number): any {

      return allProducts.filter(p => p.id === productId);
  }
}
