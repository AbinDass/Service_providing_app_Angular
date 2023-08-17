import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentboxComponent } from './post-commentbox.component';

describe('PostCommentboxComponent', () => {
  let component: PostCommentboxComponent;
  let fixture: ComponentFixture<PostCommentboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCommentboxComponent]
    });
    fixture = TestBed.createComponent(PostCommentboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
