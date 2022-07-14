import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { MatCardModule } from '@angular/material/card';
import { PostComponent } from './post/post.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { PostInfoComponent } from './post/post-info/post-info.component';
import { PostUserInfoComponent } from './post/post-user-info/post-user-info.component';
import { PostCaptionComponent } from './post/post-caption/post-caption.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FormsModule } from '@angular/forms';
import { ThousandSuffixesPipe } from 'src/app/pipes/number-suffix.pipe';
import { FormatDatePipe } from 'src/app/pipes/format-date.pipe';


@NgModule({
  declarations: [
    PostsListComponent,
    PostComponent,
    PostInfoComponent,
    PostUserInfoComponent,
    PostCaptionComponent,
    PostDetailsComponent,
    ThousandSuffixesPipe,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
  ],
  exports: [
    PostsListComponent,
    PostComponent,
    PostInfoComponent,
    PostUserInfoComponent,
    PostCaptionComponent,
    PostDetailsComponent,
  ],
})
export class PostsListModule {}
