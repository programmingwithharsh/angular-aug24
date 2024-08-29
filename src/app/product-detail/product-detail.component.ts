import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../iproduct';
import { StarComponent } from '../star/star.component';
import { NgIf } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [StarComponent, NgIf, NavComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  product: IProduct | undefined;
  errorMessage = "";
  constructor(private productServ: ProductService, private route: ActivatedRoute, private router: Router) {

  }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // converted string in to number
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productServ.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    })
  }

  onBack() {
    this.router.navigate(["/products"]);
  }

}
