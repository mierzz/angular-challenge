import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.posts = [];
  }

  async ngOnInit() {
    this.posts = await this.postsService.getPostsList();
  }
}
