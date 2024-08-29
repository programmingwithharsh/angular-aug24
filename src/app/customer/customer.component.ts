import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ICustomer } from '../ICustomer';
import { NgIf, NgFor, JsonPipe, NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { NavComponent } from '../nav/nav.component';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule, FormsModule, JsonPipe, NgClass, NavComponent],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  customers!: ICustomer[];
  errorMessage = "";
  customerForm!: FormGroup;
  constructor(private customerServ: CustomerService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCustomersList();
    this.createCustomerForm();
  }

  getCustomersList() {
    this.customerServ.getCustomers().subscribe({
      next: customers => {
        this.customers = customers
      },
      error: err => this.errorMessage = err
    })
  }

  createCustomerForm() {
    this.customerForm = this.fb.group({
      firstName: ['Ashish', [Validators.required, Validators.minLength(3)]],
      lastName: ['Limhan', [Validators.required, Validators.maxLength(50)]]
    })
    console.log(this.customerForm.value);
  }

  save() {
    console.log(this.customerForm);
    console.log(this.customerForm.value);
  }

}
