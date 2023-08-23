import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowServicesComponent } from './admin-show-services.component';

describe('AdminShowServicesComponent', () => {
  let component: AdminShowServicesComponent;
  let fixture: ComponentFixture<AdminShowServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminShowServicesComponent]
    });
    fixture = TestBed.createComponent(AdminShowServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
