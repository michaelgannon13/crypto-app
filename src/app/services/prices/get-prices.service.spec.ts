import { TestBed } from '@angular/core/testing';

import { GetPricesService } from './get-prices.service';

describe('GetPricesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetPricesService = TestBed.get(GetPricesService);
    expect(service).toBeTruthy();
  });
});
