import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { FormatService } from 'src/app/services/format.service';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss'],
})
export class PostInfoComponent {
  @Input() post?: Post;

  constructor(public format: FormatService) {}
}
