import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavComponent],
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
