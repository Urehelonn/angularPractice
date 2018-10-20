import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';
import { AppError } from '../../common/app-error';
import { NotFoundError } from '../../common/not-found-error';
import { BadRequestError } from '../../common/bad-request-error';

@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styleUrls: ['./prac.component.css'],
  inputs: ['name']
})
export class PracComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      response => {
        this.posts = response.json();
      },
      error => {
        alert('A unexpected error occurred.');
        console.log(error);
      }
    );
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    input.value = '';
    this.service.addPosts(post).subscribe(
      response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json());
      },
      (error: AppError) => {
        if (error instanceof BadRequestError) {
          // this.form.setErrors(error.json());
        } else {
         
        }
      }
    );
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(
      response => {
        console.log(response.json());
      },
      error => {
        alert('A unexpected error occurred wehen trying to update post.');
        console.log(error);
      }
    );
  }

  deletePost(post) {
    this.service.deletePost(post).subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post has already been deleted.');
        } else {
          alert('A unexpected error occurred wehen trying to delete post.');
          console.log(error);
        }
      }
    );
  }
}
