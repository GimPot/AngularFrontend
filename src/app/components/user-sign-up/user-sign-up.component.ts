import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css'],
  providers: [UsersService]
})
export class UserSignUpComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  addUser(form: NgForm) {
    this.usersService.postUser(form.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}
