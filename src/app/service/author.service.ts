import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private _authors;

  constructor() {
    this._authors = ['author1', 'author2', 'author3'];
  }

  get authors() {
    return this._authors;
  }
}
