import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  constructor(private usersService: UserService){
    // usersService.activeUserChange.subscribe((users)=>{
    //   this.users = users;
    // })
  }

  ngOnInit(){
    this.users = this.usersService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

}
