import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('currLiked')
  currLiked: boolean;
  @Input('likedHitCount')
  likedHitCount: number;

  onClick() {
    this.likedHitCount = this.currLiked ? this.likedHitCount-1 : this.likedHitCount+1;
    this.currLiked = !this.currLiked;
  }
}
