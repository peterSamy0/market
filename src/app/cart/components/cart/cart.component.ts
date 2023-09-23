import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any[] = [];
  totalPrice: number = 0;
  ngOnInit(){
    this.getCartItems()
    this.getTotalPrice()
  }
  getCartItems(){
    this.cart = JSON.parse(localStorage.getItem('cart')!) || []
  }

  getTotalPrice(){
    this.totalPrice = 0;
    for(let i in this.cart){
      this.totalPrice += this.cart[i].quantity * this.cart[i].price;
    }
  }

  inCQuantity(item: any){
    if(item.quantity < item.stock){
      item.quantity++ 
      this.getTotalPrice()
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }

  deCQuantity(item: any){
    if(item.quantity > 1){
      item.quantity-- 
      this.getTotalPrice()
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }

  removeItem(item: any){
    this.cart = this.cart.filter( val => val != item);
    localStorage.setItem('cart', JSON.stringify(this.cart))
    this.getTotalPrice()
  }

  clearCart(){
    localStorage.setItem('cart', '[]')
    this. getCartItems()
    this.getTotalPrice()
  }
}
