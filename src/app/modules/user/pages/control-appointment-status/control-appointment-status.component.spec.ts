import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAppointmentStatusComponent } from './control-appointment-status.component';

describe('ControlAppointmentStatusComponent', () => {
  let component: ControlAppointmentStatusComponent;
  let fixture: ComponentFixture<ControlAppointmentStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlAppointmentStatusComponent]
    });
    fixture = TestBed.createComponent(ControlAppointmentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
