import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Author List';
  zTitle=[
    {title:'Shipping Details',
  contain:'Here are details for shopping.'}, {title:'Billing Details',
  contain:'Here are details for Billing.'}];

  // like component
  like = {
    likedUser: 8,
    ifLiked: true
  };

  onStateChange(event) {
    console.log(event.name + ' is checked?  ' + event.check);
  }
}
