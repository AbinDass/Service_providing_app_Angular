import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllSubscriptionComponent } from './admin-all-subscription.component';

describe('AdminAllSubscriptionComponent', () => {
  let component: AdminAllSubscriptionComponent;
  let fixture: ComponentFixture<AdminAllSubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAllSubscriptionComponent]
    });
    fixture = TestBed.createComponent(AdminAllSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
