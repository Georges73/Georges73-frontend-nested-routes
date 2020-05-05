import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Product, PRODUCTS } from '../products';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()

export class ProductService {

    private productUrl = 'api/productsarray';

    constructor(private http: HttpClient) {}



    public  getProducts(): Observable<Product[]> {

        return this.http.get<Product[]>(this.productUrl).pipe(tap(_ => this.log('fetched products')),
            catchError(this.handleError<Product[]>('getProducts', []))
          );
}



getProduct(id: number): Observable<Product> {
    const url = `${this.productUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetched prods id=${id}`)),
      catchError(this.handleError<Product>(`getproduct id=${id}`))
    );
  }

    private log(message: string) {
       // this.messageService.add(`HeroService: ${message}`);
      }
      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);

          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }



    }
