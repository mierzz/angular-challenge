import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsDetailsScreenRoutingModule } from './posts-details-screen-routing.module';
import { PostsDetailsScreenComponent } from './posts-details-screen.component';
import { PostsListModule } from 'src/app/components/posts-list/posts-list.module';
import { LayoutModule } from 'src/app/components/layout/layout.module';


@NgModule({
  declarations: [
    PostsDetailsScreenComponent
  ],
  imports: [
    CommonModule,
    PostsDetailsScreenRoutingModule,
    PostsListModule,
    LayoutModule,
  ],
  exports: [
    PostsDetailsScreenComponent
  ]
})
export class PostsDetailsScreenModule { }
