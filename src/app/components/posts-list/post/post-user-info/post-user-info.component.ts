import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { FormatService } from 'src/app/services/format.service';

@Component({
  selector: 'app-post-user-info',
  templateUrl: './post-user-info.component.html',
  styleUrls: ['./post-user-info.component.scss'],
})
export class PostUserInfoComponent {
  @Input() post?: Post;

  constructor(public format: FormatService) {}
}
