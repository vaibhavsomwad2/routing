import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userObj:Iusers | undefined;
userId:number = 1 
  constructor(private usersService:UsersService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.userId = +this.route.snapshot.params['id']
    this.route.params.subscribe((myParam:Params)=>{
      this.userId = +myParam['id']
    this.userObj = this.usersService.getUser(this.userId)
    console.log(this.userObj);
    })
  }
}
