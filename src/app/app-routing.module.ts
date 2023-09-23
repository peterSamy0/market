import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: 'full'
  },
  {
    path: "products",
    component: AllProductsComponent
  },
  {
    path: "products/details/:id",
    component: ProductDetailsComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "**",
    component: NotFoundComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
