import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];
  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

    getAllUsers() {
      this.userService.getAllUsers().subscribe(function(res) {
      this.userList = res;
      }.bind(this), error =>  console.log(error) );
  }

  }

}
