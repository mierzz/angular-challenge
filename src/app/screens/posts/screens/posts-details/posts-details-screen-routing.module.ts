import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivatePostDetailsScreenGuard } from './guards/can-deactivate-post-details-screen.guard';
import { PostsDetailsScreenComponent } from './posts-details-screen.component';

const routes: Routes = [
  {
    path: 'posts/:id',
    component: PostsDetailsScreenComponent,
    canDeactivate: [CanDeactivatePostDetailsScreenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsDetailsScreenRoutingModule {}
