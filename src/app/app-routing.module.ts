import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

// ROUTES
const appRoutes: Routes = [

    { path: '', redirectTo: 'product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent, children: [
      {
     path: 'product-details/:id',
      component: ProductDetailsComponent
     }
    ]
    },
    { path: '',   redirectTo: '/product-list', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
