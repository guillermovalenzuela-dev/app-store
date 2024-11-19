import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, MenubarModule, AvatarModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  searchQuery: string = '';
  @Output() search = new EventEmitter<string>();  
  onSearch(): void {
    
    this.search.emit(this.searchQuery);
  }
}
