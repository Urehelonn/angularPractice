import { Injectable, EventEmitter } from '@angular/core';
import { CounterService } from './counterService.service';

@Injectable()
export class UserService{

  constructor(private counterService: CounterService){}

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  activeUserChange = new EventEmitter<string[]>();
  inactiveUserChange = new EventEmitter<string[]>();

  onSetToInactive(id: number){
    this.counterService.setToInactiveMsg(this.activeUsers[id], this.inactiveUsers.length+1);
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.activeUserChange.emit(this.activeUsers);
    this.inactiveUserChange.emit(this.inactiveUsers);
  }
  onSetToActive(id: number){
    this.counterService.setToActiveMsg(this.inactiveUsers[id], this.activeUsers.length+1);
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.activeUserChange.emit(this.activeUsers);
    this.inactiveUserChange.emit(this.inactiveUsers);
  }
}