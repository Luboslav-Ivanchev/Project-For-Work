import { TestBed } from '@angular/core/testing';

import { ApiserviceCargoService } from './apiservice-cargo.service';

describe('ApiserviceCargoService', () => {
  let service: ApiserviceCargoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiserviceCargoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
