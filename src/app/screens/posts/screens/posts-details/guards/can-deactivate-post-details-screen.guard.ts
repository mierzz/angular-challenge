import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PostsDetailsScreenComponent } from '../posts-details-screen.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivatePostDetailsScreenGuard
  implements CanDeactivate<PostsDetailsScreenComponent>
{
  canDeactivate(component: PostsDetailsScreenComponent): boolean {
    let leavePage = true;
    if (component.commentChanged) {
      leavePage = confirm('Your changes not saved. Leave page?');
    }
    return leavePage;
  }
}
