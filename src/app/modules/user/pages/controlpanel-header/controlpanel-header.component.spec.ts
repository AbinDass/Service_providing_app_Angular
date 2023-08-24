import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlpanelHeaderComponent } from './controlpanel-header.component';

xdescribe('ControlpanelHeaderComponent', () => {
  let component: ControlpanelHeaderComponent;
  let fixture: ComponentFixture<ControlpanelHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlpanelHeaderComponent],
    });
    fixture = TestBed.createComponent(ControlpanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
