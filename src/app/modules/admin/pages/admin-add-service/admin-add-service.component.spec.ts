import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddServiceComponent } from './admin-add-service.component';

xdescribe('AdminAddServiceComponent', () => {
  let component: AdminAddServiceComponent;
  let fixture: ComponentFixture<AdminAddServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddServiceComponent],
    });
    fixture = TestBed.createComponent(AdminAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
