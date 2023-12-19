import { TestBed } from '@angular/core/testing';

import { DepserviceService } from './depservice.service';

describe('DepserviceService', () => {
  let service: DepserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
