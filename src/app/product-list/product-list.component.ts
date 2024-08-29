import { Component, OnInit } from '@angular/core'; // importing a module
import { NgIf, NgFor, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { IProduct } from '../iproduct';
import { StarComponent } from "../star/star.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from '../convert-to-spaces.pipe';
import { FilterProductPipe } from '../filter-product.pipe';
import { ProductService } from '../product.service';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
@Component({ // Decorator
  selector: 'app-product-list', // Component name
  standalone: true,
  imports: [NgIf, NgFor, StarComponent, ProductDetailComponent, FormsModule, UpperCasePipe, LowerCasePipe, ConvertToSpacesPipe, FilterProductPipe, RouterLink, NavComponent],
  templateUrl: './product-list.component.html', // template
  styleUrl: './product-list.component.scss' // template
})
export class ProductListComponent implements OnInit { // exporting component
  pageTitle: string = "Product List Component"; // property
  products!: IProduct[];
  showImage: boolean = false;
  listFilter: string = "Cart";
  errorMessage = "";

  constructor(private productServ: ProductService) {
    // console.log("Constructor - 1");
  }

  ngOnInit(): void {
    // console.log("ngOnInit - 2");
    // console.log(this.productServ.getProducts());
    this.productServ.getProducts().subscribe({
      next: products => {
        this.products = products
      },
      error: err => this.errorMessage = err
    })
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    debugger
    this.pageTitle = message;
  }

  saveProduct(): void {
    let newProduct = {
      "productId": 4,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    };
    // replace newProduct with form value
    this.productServ.createProduct(newProduct).subscribe({
      next: products => {
        console.log("done");
      },
      error: err => this.errorMessage = err
    })
  }
}
