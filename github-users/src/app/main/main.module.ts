import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MainComponent,
    UsersListComponent
  ],
  exports: [
    MainComponent
  ],
  providers: [
    UsersService
  ]
})
export class MainModule { }
