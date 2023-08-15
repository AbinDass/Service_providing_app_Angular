import { TestBed } from '@angular/core/testing';

import { NearbyservicesService } from './nearbyservices.service';

describe('NearbyservicesService', () => {
  let service: NearbyservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearbyservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
