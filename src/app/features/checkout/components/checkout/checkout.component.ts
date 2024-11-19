import { Component } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { Product } from '../../../products/models/product.model';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, MenubarModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartItems: Product[];
  totalPrice:number;
  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.cartItems;
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
    
  }
}
