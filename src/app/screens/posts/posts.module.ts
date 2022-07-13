import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostsDetailsScreenModule } from './screens/posts-details/posts-details-screen.module';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { PostsListModule } from 'src/app/components/posts-list/posts-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PostsRoutingModule,
    PostsDetailsScreenModule,
    PostsListModule,
    LayoutModule,
  ],
  exports: [
    PostsComponent,
    PostsRoutingModule
  ]
})
export class PostsModule { }
