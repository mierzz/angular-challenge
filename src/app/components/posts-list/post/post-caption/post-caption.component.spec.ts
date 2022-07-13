import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCaptionComponent } from './post-caption.component';

describe('PostCaptionComponent', () => {
  let component: PostCaptionComponent;
  let fixture: ComponentFixture<PostCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
