import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewsletterComponent } from './post-newsletter.component';

xdescribe('PostNewsletterComponent', () => {
  let component: PostNewsletterComponent;
  let fixture: ComponentFixture<PostNewsletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostNewsletterComponent],
    });
    fixture = TestBed.createComponent(PostNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
