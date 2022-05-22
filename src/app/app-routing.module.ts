import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { PriceFilterComponent } from './components/price-filter/price-filter.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:'',component:ProductsComponent},
  {path:'',component:ProductsComponent,pathMatch:'full'},
  {path:"header",component:HeaderComponent},
  {path:"cart",component:CartComponent},
  {path:"price",component:PriceFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
