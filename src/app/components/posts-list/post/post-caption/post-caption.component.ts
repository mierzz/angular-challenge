import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { StringReducerPipe } from 'src/app/pipes/reduce-string.pipe';

@Component({
  selector: 'app-post-caption',
  templateUrl: './post-caption.component.html',
  styleUrls: ['./post-caption.component.scss'],
  providers: [StringReducerPipe]
})
export class PostCaptionComponent {
  @Input() post?: Post;
  @Input() short = true;

  constructor(private stringReducerPipe: StringReducerPipe) {}

  getCaption() {
    return this.short
      ? this.stringReducerPipe.transform(this.post?.caption || '')
      : this.post?.caption;
  }
}
