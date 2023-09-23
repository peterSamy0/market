import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectComponent } from './components/select/select.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ProductComponent } from './components/product/product.component';
import { SelectedCategoryComponent } from './components/selected-category/selected-category.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    SpinnerComponent,
    ProductComponent,
    SelectedCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    SpinnerComponent,
    ProductComponent,
    SelectedCategoryComponent
  ]
})
export class SharedModule { }
