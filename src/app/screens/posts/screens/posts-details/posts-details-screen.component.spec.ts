import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDetailsScreenComponent } from './posts-details-screen.component';

describe('PostsDetailsComponent', () => {
  let component: PostsDetailsScreenComponent;
  let fixture: ComponentFixture<PostsDetailsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsDetailsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
