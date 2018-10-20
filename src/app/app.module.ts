import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AuthorComponent } from './component/author/author.component';
import { PracComponent } from './component/prac/prac.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { CaseFixPipe } from './pipe/case-fix.pipe';
import { PanelComponent } from './component/panel/panel.component';
import { LikeComponent } from './component/like/like.component';
import { ZippyComponent } from './component/zippy/zippy.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';
import { NewCourseFormComponent } from './component/new-course-form/new-course-form.component';
import { NewPasswordFormComponent } from './component/new-password-form/new-password-form.component';
import { PostService } from './service/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersComponent } from './component/github-followers/github-followers.component';
import { DataService } from './service/data.service';
import { GithubFollowersService } from './service/github-followers.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    PracComponent,
    SummaryPipe,
    CaseFixPipe,
    PanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    NewPasswordFormComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    AppErrorHandler,
    DataService,
    GithubFollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
