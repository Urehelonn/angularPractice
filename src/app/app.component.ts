import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Author List';

  // like component
  like = {
    likedUser: 8,
    ifLiked: true
  };

  onStateChange(event) {
    console.log(event.name + ' is checked?  ' + event.check);
  }
}
