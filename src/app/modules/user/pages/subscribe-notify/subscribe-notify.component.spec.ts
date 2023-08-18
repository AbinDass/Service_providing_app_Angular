import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeNotifyComponent } from './subscribe-notify.component';

describe('SubscribeNotifyComponent', () => {
  let component: SubscribeNotifyComponent;
  let fixture: ComponentFixture<SubscribeNotifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeNotifyComponent]
    });
    fixture = TestBed.createComponent(SubscribeNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
