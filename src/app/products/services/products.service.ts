import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  isLoaded: boolean = true;
  localCart!: string[];
  isExist!: any;
  index!: number;

  url: string = 'https://dummyjson.com/'
  constructor(private http: HttpClient) { }

  getAllProudects(){
    return this.http.get(this.url+'products')
  }

  getCategorys(){
    return this.http.get( this.url + 'products/categories')
  }

  getSelectedCat(category: any){
    return this.http.get( this.url + 'products/category/' + category)
  }

  getById(val: number){
    return this.http.get( this.url + 'products/' + val)
  }


  addToCart(event: any){
    this.localCart = JSON.parse(localStorage.getItem('cart')!) || []; // get local cart in storage.
    this.isExist = this.localCart.find( (val: any) => val.id == event.id) // check if the added product is exists.
    this.index = this.localCart.indexOf(this.isExist) // find the index of product in cart if exists.
    // if product is exists increase the number of quantity if not add to cart.
    if(this.isExist){
      this.isExist.quantity++
      this.localCart[this.index] = this.isExist
    }else{
      event.quantity = 1
      this.localCart.push(event)
    }
    localStorage.setItem('cart', JSON.stringify(this.localCart)) // set cart to localstorage after updated.
  }
}
