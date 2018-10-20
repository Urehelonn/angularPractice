import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('A unexpected error occurred wehen trying to create new post.');
    console.log(error);
  }
}
