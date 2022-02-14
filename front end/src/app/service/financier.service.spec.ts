import { TestBed } from '@angular/core/testing';

import { FinancierService } from './financier.service';

describe('FinancierService', () => {
  let service: FinancierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
