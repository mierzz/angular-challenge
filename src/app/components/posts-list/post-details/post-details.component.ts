import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

interface CommentEvent {
  comment: string;
}

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnChanges {
  @Input() postId!: string;
  @Output('commentChanged') commentChanged: EventEmitter<CommentEvent>;
  @ViewChild('form') form!: NgForm;
  post?: Post;
  comment: string;

  constructor(private postsService: PostsService) {
    this.comment = '';
    this.commentChanged = new EventEmitter<CommentEvent>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.postId) {
      this.loadPostDetails(changes.postId.currentValue);
    }
  }

  async loadPostDetails(postId: string) {
    this.post = await this.postsService.getPostDetails(postId);
  }

  onSubmit() {
    if (this.form.invalid) {
      alert('Fill comment.');
      return;
    }
    this.onCommentChanged('');
    alert('Thank you for the comment!');
  }

  onCommentChanged(comment: string) {
    this.comment = comment;
    this.commentChanged.emit({ comment });
  }
}
