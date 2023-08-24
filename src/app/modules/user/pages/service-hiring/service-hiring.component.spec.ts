import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceHiringComponent } from './service-hiring.component';

xdescribe('ServiceHiringComponent', () => {
  let component: ServiceHiringComponent;
  let fixture: ComponentFixture<ServiceHiringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceHiringComponent],
    });
    fixture = TestBed.createComponent(ServiceHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
