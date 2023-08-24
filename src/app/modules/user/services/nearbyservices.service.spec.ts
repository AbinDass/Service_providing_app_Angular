import { TestBed } from '@angular/core/testing';

import { NearbyservicesService } from './nearbyservices.service';
import { HttpClientModule } from '@angular/common/http';

describe('NearbyservicesService', () => {
  let service: NearbyservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(NearbyservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
