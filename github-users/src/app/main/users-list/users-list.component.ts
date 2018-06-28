import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  sub: any;
  users: object;
  displayUsers: object;
  ngModel: any;
  searchUser = {login: ''};

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.sub = this.userService.getUsers()
      .subscribe(users => {
        this.displayUsers = this.users = users;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getUsersFiltered (type: string) {
    this.displayUsers = _.filter(this.users, (user: any) => user.type === type );
  }

}
