import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProfileCardComponent } from './service-profile-card.component';

describe('ServiceProfileCardComponent', () => {
  let component: ServiceProfileCardComponent;
  let fixture: ComponentFixture<ServiceProfileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceProfileCardComponent]
    });
    fixture = TestBed.createComponent(ServiceProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
