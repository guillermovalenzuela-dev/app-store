import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { map, Observable, of } from 'rxjs';
import { CardModule } from 'primeng/card';
import { CartService } from '../../../cart/services/cart.service';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,CardModule, ImageModule, ButtonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  filteredProducts: Observable<Product[]> = of([]);

  @Input() searchQuery: string = '';

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.applyFilter();
    });
  }

  ngOnChanges(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredProducts = of(this.products).pipe(
      map((products: Product[]) =>
        products.filter(product =>
          product.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          product.id.toString() === this.searchQuery
        )
      )
    );
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert("Agregaste el producto " + product.title);
  }
}
