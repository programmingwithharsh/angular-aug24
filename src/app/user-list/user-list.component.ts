import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Iuser } from '../iuser';
import { NgIf, NgFor } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgIf, NgFor, NavComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users!: Iuser[];
  errorMessage = "";
  constructor(private userServ: UserService) {

  }

  ngOnInit(): void {
    // console.log("ngOnInit - 2");
    // console.log(this.productServ.getProducts());
    this.userServ.getUsers().subscribe({
      next: users => {
        this.users = users
      },
      error: err => this.errorMessage = err
    })
  }

}
