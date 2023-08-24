import { TestBed } from '@angular/core/testing';

import { ControlpanelService } from './controlpanel.service';
import { HttpClientModule } from '@angular/common/http';

describe('ControlpanelService', () => {
  let service: ControlpanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(ControlpanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
