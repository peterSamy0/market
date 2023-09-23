import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  products: any[] = [];
  categorys: any[] = []; 
  isLoaded: boolean = true;
  localCart!: string[];
  isExist!: any;
  index!: number;

  constructor(private productService: ProductsService){}

  ngOnInit(){
    this.getProducts();
    this.getCategorys()
  }

  getProducts(){
    this.isLoaded = true;
    this.productService.getAllProudects().subscribe( 
      (res: any) => {
        this.products = res['products'];
        this.isLoaded = false
      },
      (error) => console.log(error)
    );
  }

  getCategorys(){
    this.productService.getCategorys().subscribe( 
      (res: any) => {
        this.categorys = res;
      },
      (error) => alert(error)
    );
  }

  filter(event: any){
    let value = event.target.value;
    (value === 'all') ? this.getProducts() : this.getSelectedCat(value)
    console.log(value)
  }

  getSelectedCat(selectedCat: any){
    this.isLoaded = true;
    this.productService.getSelectedCat(selectedCat).subscribe(
      (res: any)=> {
        this.products = res['products']
        this.isLoaded = false;
      }
    )
  }

  addToCart(event: any){
    this.productService.addToCart(event)
  }
}