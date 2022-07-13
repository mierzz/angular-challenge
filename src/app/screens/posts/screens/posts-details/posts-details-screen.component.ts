import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-details-screen',
  templateUrl: './posts-details-screen.component.html',
  styleUrls: ['./posts-details-screen.component.scss'],
})
export class PostsDetailsScreenComponent {
  postId: string;
  commentChanged: boolean;

  constructor(private activateRoute: ActivatedRoute) {
    this.postId = activateRoute.snapshot.params['id'];
    this.commentChanged = false;
  }

  onCommentChanged(comment: string) {
    this.commentChanged = comment.length !== 0;
  }
}
