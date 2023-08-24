import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRequestsComponent } from './control-requests.component';

xdescribe('ControlRequestsComponent', () => {
  let component: ControlRequestsComponent;
  let fixture: ComponentFixture<ControlRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlRequestsComponent],
    });
    fixture = TestBed.createComponent(ControlRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
