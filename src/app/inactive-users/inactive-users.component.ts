import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/usersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  constructor(private userService: UserService){
    // userService.inactiveUserChange.subscribe((users)=>{
    //   this.users=users;
    // });
  };

  ngOnInit(){
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
