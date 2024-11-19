import { Injectable } from '@angular/core';
import { Product } from '../../products/models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: Product[] = [];
  
  constructor() { }

  addToCart(product: Product): void {
    this.cartItems.push(product);
    
    
  }

  

  removeFromCart(product: Product): void {
    const index = this.cartItems.findIndex(item => item === product);
    if(index >= 0)
    {
      this.cartItems.splice(index,1);
    }
    console.log(index);
  }

  clearCart(): void {
    this.cartItems = [];
    console.log(this.cartItems);
  }

  
}
