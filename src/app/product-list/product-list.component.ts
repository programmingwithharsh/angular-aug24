import { Component, OnInit } from '@angular/core'; // importing a module
import { NgIf, NgFor, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { IProduct } from '../iproduct';
import { StarComponent } from "../star/star.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { FilterProductPipe } from '../filter-product.pipe';
import { ProductService } from '../product.service';

@Component({ // Decorator
  selector: 'app-product-list', // Component name
  standalone: true,
  imports: [NgIf, NgFor, StarComponent, ProductDetailComponent, FormsModule, UpperCasePipe, LowerCasePipe, ConvertToSpacesPipe, FilterProductPipe],
  templateUrl: './product-list.component.html', // template
  styleUrl: './product-list.component.scss' // template
})
export class ProductListComponent implements OnInit { // exporting component
  pageTitle: string = "Product List Component"; // property
  products!: IProduct[];
  showImage: boolean = false;
  listFilter: string = "Cart";

  constructor(private productServ: ProductService) {
    console.log("Constructor - 1");
  }

  ngOnInit(): void {
    console.log("ngOnInit - 2");
    this.products = this.productServ.getProducts();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    debugger
    this.pageTitle = message;
  }
}
