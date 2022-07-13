import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const redirectHomeRoute: Route = {
  path: '',
  pathMatch: 'full',
  redirectTo: 'posts',
};

@NgModule({
  imports: [RouterModule.forRoot([redirectHomeRoute])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
