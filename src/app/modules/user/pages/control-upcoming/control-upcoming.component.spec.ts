import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlUpcomingComponent } from './control-upcoming.component';

describe('ControlUpcomingComponent', () => {
  let component: ControlUpcomingComponent;
  let fixture: ComponentFixture<ControlUpcomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlUpcomingComponent]
    });
    fixture = TestBed.createComponent(ControlUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
