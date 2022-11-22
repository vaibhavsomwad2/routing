import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArray:Iusers[] = [
    {
      id : 1,
      userName : 'Narendra',
    },
    {
      id : 2,
      userName:'Sangam',
    },
    {
      id : 3,
      userName : 'Nagesh'
    }
  ]

  constructor() { }
  
  getAllUsers(): Iusers[]{
    return this.usersArray
  }

  getUser(id:number): Iusers | undefined{
    return this.usersArray.find(user => user.id === id)
  }

}
