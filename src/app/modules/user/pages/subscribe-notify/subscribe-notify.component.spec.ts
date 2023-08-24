import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeNotifyComponent } from './subscribe-notify.component';

xdescribe('SubscribeNotifyComponent', () => {
  let component: SubscribeNotifyComponent;
  let fixture: ComponentFixture<SubscribeNotifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeNotifyComponent],
    });
    fixture = TestBed.createComponent(SubscribeNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
