import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService){}

  getAccounts(){
      return this.accounts;
  }

  addAccount(name: string, status:string){
      this.accounts.push({name: name, status:status});
      this.loggingService.logStatusChangeOnConsole(status);
      
  }

  editStatus(id:number, status:string){
    this.accounts[id].status = status;
    this.loggingService.logStatusChangeOnConsole(status);
  }


}