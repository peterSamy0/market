import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id!:number;
  product: any;
  isLoaded: boolean = false;
  constructor(private route: ActivatedRoute, private detailService: ProductsService, private productService: ProductsService) {}

  ngOnInit() {
    this.getProductById()
  }

  getProductById(){
    this.isLoaded = true;
    const idParam = this.route.snapshot.paramMap.get("id")
    this.id = +idParam!;
    this.detailService.getById(this.id).subscribe(
    
      res => {
        this.product = res
        this.isLoaded = false;
      },
      error => {
        console.log(error)
        this.isLoaded = false;
      }
    )
  }
  addToCart(val: object){
    this.productService.addToCart(val)
  }
}
