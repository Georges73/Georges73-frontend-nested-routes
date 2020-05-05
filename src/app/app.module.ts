import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
