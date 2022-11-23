import { Component, OnInit } from '@angular/core';
import { Iusers } from '../shared/model/users';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersArray:Iusers[] = []
  ActiveId:number = 1;
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.usersArray = this.usersService.getAllUsers();
    console.log( this.usersArray);
    
  }

}
