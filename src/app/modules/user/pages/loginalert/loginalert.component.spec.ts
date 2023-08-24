import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginalertComponent } from './loginalert.component';

xdescribe('LoginalertComponent', () => {
  let component: LoginalertComponent;
  let fixture: ComponentFixture<LoginalertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginalertComponent],
    });
    fixture = TestBed.createComponent(LoginalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
