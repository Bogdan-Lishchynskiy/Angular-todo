import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: Object;
  sub: Subscription;

  constructor(
  ) { }

  ngOnInit() {
  }

}
