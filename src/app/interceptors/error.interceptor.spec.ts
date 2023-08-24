import { TestBed } from '@angular/core/testing';

import { ErrorHandlingService } from './error.interceptor';

xdescribe('ErrorInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ErrorHandlingService],
    })
  );

  it('should be created', () => {
    const interceptor: ErrorHandlingService =
      TestBed.inject(ErrorHandlingService);
    expect(interceptor).toBeTruthy();
  });
});
