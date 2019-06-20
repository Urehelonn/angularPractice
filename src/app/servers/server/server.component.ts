import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy{
  server: {id: number, name: string, status: string};
  routeSubscription: Subscription;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

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

  onEdit(){
    this.router.navigate(['edit']);
  }

}
