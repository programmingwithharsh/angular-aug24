import { Component } from '@angular/core'; // importing a module

@Component({ // Decorator
  selector: 'app-product-list', // Component name
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html', // template
  styleUrl: './product-list.component.scss' // template
})
export class ProductListComponent { // exporting component
      pageTitle: string = "Product List"; // property
}
