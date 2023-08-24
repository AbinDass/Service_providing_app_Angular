import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAppointmentComponent } from './control-appointment.component';

xdescribe('ControlAppointmentComponent', () => {
  let component: ControlAppointmentComponent;
  let fixture: ComponentFixture<ControlAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlAppointmentComponent],
    });
    fixture = TestBed.createComponent(ControlAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
