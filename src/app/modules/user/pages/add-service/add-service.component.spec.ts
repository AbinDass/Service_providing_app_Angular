import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceComponent } from './add-service.component';

xdescribe('AddServiceComponent', () => {
  let component: AddServiceComponent;
  let fixture: ComponentFixture<AddServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddServiceComponent],
    });
    fixture = TestBed.createComponent(AddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
