import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceprofileComponent } from './serviceprofile.component';

describe('ServiceprofileComponent', () => {
  let component: ServiceprofileComponent;
  let fixture: ComponentFixture<ServiceprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceprofileComponent]
    });
    fixture = TestBed.createComponent(ServiceprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
