import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../service/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors;

  constructor() {
    let service= new AuthorService();
    this.authors = service.authors;
  }

  ngOnInit() {}
}
