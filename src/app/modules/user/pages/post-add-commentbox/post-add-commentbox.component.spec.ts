import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddCommentboxComponent } from './post-add-commentbox.component';

describe('PostAddCommentboxComponent', () => {
  let component: PostAddCommentboxComponent;
  let fixture: ComponentFixture<PostAddCommentboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostAddCommentboxComponent]
    });
    fixture = TestBed.createComponent(PostAddCommentboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
