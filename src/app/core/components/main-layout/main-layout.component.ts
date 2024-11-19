import { Component } from '@angular/core';
import { ProductListComponent } from '../../../features/products/components/product-list/product-list.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [ProductListComponent, NavBarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  searchQuery: string = '';

  onSearch(query: string): void {
    console.log(this.searchQuery);
    this.searchQuery = query;
  }
}
