import { TestBed } from '@angular/core/testing';

import { SubscriptionService } from './subscription.service';
import { HttpClientModule } from '@angular/common/http';

describe('SubscriptionService', () => {
  let service: SubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(SubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
