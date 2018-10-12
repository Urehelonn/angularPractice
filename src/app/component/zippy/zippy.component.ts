import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent{
  @Input('zippy') zippy;
  @Input('zippyContain') zippyContain;
  expand = false;

  onExpand(){
    this.expand=!this.expand;
  }

}
