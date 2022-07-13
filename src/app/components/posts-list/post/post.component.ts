import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { Post } from 'src/app/interfaces/post.interface';
import { FormatService } from 'src/app/services/format.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post?: Post;

  constructor(public format: FormatService) {}
  
}
