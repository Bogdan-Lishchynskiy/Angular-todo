import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class UsersService implements OnInit {
  private githubUrl = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  getUsers(): Observable<Object> {
    return this.http.get(`${this.githubUrl}/users`);
  }

}
