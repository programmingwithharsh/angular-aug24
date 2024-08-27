import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {

  constructor(private router: Router) {

  }

  onBack() {
    this.router.navigate(["/products"]);
  }
}
