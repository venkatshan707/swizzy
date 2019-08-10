import { TestBed, inject } from '@angular/core/testing';

import { SwizzyService } from './swizzy.service';

describe('SwizzyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwizzyService]
    });
  });

  it('should be created', inject([SwizzyService], (service: SwizzyService) => {
    expect(service).toBeTruthy();
  }));
});
