import { TestBed } from '@angular/core/testing';

import { CanDeactivatePostDetailsScreenGuard } from './can-deactivate-post-details-screen.guard';

describe('CanDeactivatePostDetailsScreenGuard', () => {
  let guard: CanDeactivatePostDetailsScreenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivatePostDetailsScreenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
