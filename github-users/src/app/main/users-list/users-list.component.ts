import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  sub: any;
  users: Object;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.sub = this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
