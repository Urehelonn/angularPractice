import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy{
  server: {id: number, name: string, status: string};
  routeSubscription: Subscription;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(
      (params: Params)=>{
        this.server = this.serversService.getServer(+params['id']);
      }
    );
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
  }

}
