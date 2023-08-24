import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSubscriptionsComponent } from './admin-add-subscriptions.component';

xdescribe('AdminAddSubscriptionsComponent', () => {
  let component: AdminAddSubscriptionsComponent;
  let fixture: ComponentFixture<AdminAddSubscriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddSubscriptionsComponent],
    });
    fixture = TestBed.createComponent(AdminAddSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
