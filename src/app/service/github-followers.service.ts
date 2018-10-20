import { Injectable } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService{

  constructor(http: Http) { 
    super('https://github.com/Urehelonn/following',http);
  }
}
