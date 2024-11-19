import { Component } from '@angular/core';
import { Product } from '../../../products/models/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Product[];
  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cartItems;
  }
  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.cartItems;
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = this.cartService.cartItems;
  }
}
