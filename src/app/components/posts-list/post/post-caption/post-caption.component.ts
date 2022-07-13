import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { FormatService } from 'src/app/services/format.service';

@Component({
  selector: 'app-post-caption',
  templateUrl: './post-caption.component.html',
  styleUrls: ['./post-caption.component.scss'],
})
export class PostCaptionComponent {
  @Input() post?: Post;
  @Input() short = true;

  constructor(public format: FormatService) {}

  getCaption() {
    return this.short
      ? this.format.short(this.post?.caption || '')
      : this.post?.caption;
  }
}
