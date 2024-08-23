import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../ICustomer';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  customers!: ICustomer[];
  errorMessage = "";
  constructor(private customerServ: CustomerService) { }

  ngOnInit(): void {
    this.customerServ.getCustomers().subscribe({
      next: customers => {
        this.customers = customers
      },
      error: err => this.errorMessage = err
    })
  }

}
