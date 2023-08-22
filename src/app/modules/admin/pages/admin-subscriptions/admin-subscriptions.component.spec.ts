import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubscriptionsComponent } from './admin-subscriptions.component';

describe('AdminSubscriptionsComponent', () => {
  let component: AdminSubscriptionsComponent;
  let fixture: ComponentFixture<AdminSubscriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSubscriptionsComponent]
    });
    fixture = TestBed.createComponent(AdminSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
