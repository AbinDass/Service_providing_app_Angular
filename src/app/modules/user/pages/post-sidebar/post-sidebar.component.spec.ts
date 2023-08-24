import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSidebarComponent } from './post-sidebar.component';

xdescribe('PostSidebarComponent', () => {
  let component: PostSidebarComponent;
  let fixture: ComponentFixture<PostSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSidebarComponent],
    });
    fixture = TestBed.createComponent(PostSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
